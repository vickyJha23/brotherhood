import { Router, Request, Response, NextFunction } from "express";
import { adminRegisterValidator} from "../validators";
import AuthAdmin from "../controllers/AuthAdmin.controller";
import AdminAuthService from "../services/AdminAuth.service";
import { Admin } from "../models";
import UserDto from "../Dtos/User.dto";
import upload from "../middlewares/upload";
import { TokenService } from "../services";



const adminRouter = Router(); 



const adminAuthService = new AdminAuthService(Admin);
const userDto = new UserDto();
const tokenService = new TokenService();
const authAdminController = new AuthAdmin(adminAuthService, userDto, tokenService); 



adminRouter.post("/register", adminRegisterValidator, upload.single("profileUrl"), (req:Request, res:Response, next:NextFunction) => {
      return authAdminController.register(req, res, next) 
});






export default adminRouter;