import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { ApiError } from "./error";

const JWT_SECRET = process.env["JWTSECRET"];

declare global {
    namespace Express {
      interface Request {
        userId: string;
        userName: string;
        userRole?: string;
      }
    }
}

export function authenticateHandler(
  req: Request,
  _res: Response,
  next: NextFunction
) {
  const token = req.headers.authorization?.split(" ")[1];
 
  if (!token) {
    return next(new ApiError("No autorizado", 401));
  }
 
  try {
    const payload = jwt.verify(token, JWT_SECRET as string) as {
      userId:string;
      userRole:string;
      iat: number;
      exp: number;
    };
    
    console.log("desde el midelware --> ",payload);

    req.userId = payload.userId;
    req.userRole = payload.userRole;
    next();
  } catch (error) {
    return next(new ApiError("No autorizado", 401));
  }
}