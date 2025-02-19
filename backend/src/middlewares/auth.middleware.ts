import {Response, NextFunction } from "express"
import { ApiError } from "../utils";
import jwt, { TokenExpiredError, JsonWebTokenError } from "jsonwebtoken";
import fs from "fs";
import path from "path";
import { AuthenticatedRequest } from "../types/type";

const authentication = (req:AuthenticatedRequest, _res:Response, next:NextFunction) => {
     try {
        const accessToken = req.cookies.accessToken || req.headers["authorization"]?.split(" ")[1];
         if(!accessToken){
          return next(new ApiError("Unauthorized user", 401, false)); 
        }
         const secret = fs.readFileSync(path.join(__dirname, "../../certs/publicKey.pem"), "utf-8"); 

         const payload = jwt.verify(accessToken, secret);
         req.user = payload;
         next()
     } catch (error) {
         if(error instanceof TokenExpiredError) {
             return next(new ApiError("Token has expired", 401, false));  
         }
          if(error instanceof JsonWebTokenError){
             return next(new ApiError ("Invalid token", 401, false
              ))
         }
         return next(new ApiError("Authentication failed !", 500, false));
         
     }
}

export default authentication;