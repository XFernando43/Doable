import { NextFunction, Request, Response } from "express";
import { ApiError } from "./error";
import type { User } from "../Domain/models/user.model";

export function authorize(...allowedRoles: User["role"][]) {
  return async (req: Request, res: Response, next: NextFunction) => {
    
    const role = req.userRole;

    if (!role) return next(new ApiError("No autorizado", 401));
 
    if (allowedRoles.includes(role as User["role"])) {
      next();
    } else {
      next(new ApiError("Acceso denegadodasd", 403));
    }
    
      
  };
}
 