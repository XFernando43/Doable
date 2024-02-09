"use strict";
// import { NextFunction } from "express";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
class ApiError extends Error {
    status;
    details;
    constructor(message, status, details) {
        super(message);
        this.status = status;
        this.details = details;
    }
}
exports.ApiError = ApiError;
// export default function errorHandler(
//     error:Error,
//     _req:Request,
//     res:Response,
//     _next:NextFunction
// ){
//     console.log("Error Handler");
//     if(error instanceof ApiError){
//         res.status(error.status).json({
//             ok:false,
//             error:{
//                 message:error.message,
//                 details:error.details
//             }
//         })
//     }
// }
