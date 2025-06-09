import { registerValidator, loginValidator, updateProfileValidator, updatePasswordValidator, sendOtpValidator, verifyOtpValidator, changePasswordValidator } from '../validators';
import AuthController from '../controllers/AuthUser.controller';
import { AuthService, TokenService, MailService } from '../services';
import UserDto from '../Dtos/User.dto';
import { Router, Request, Response, NextFunction } from 'express';
import { User, Otp } from '../models';
import authentication from '../middlewares/auth.middleware';
import { AuthenticatedRequest } from '../types/type';

const userRouter = Router();

// dependencies setup
const authService = new AuthService(User, Otp);
const tokenService = new TokenService();
const userDto = new UserDto();
const mailService = new MailService()

const authController = new AuthController(authService, tokenService, userDto, mailService);

userRouter.post(
  '/register',
  registerValidator,
  (req: Request, res: Response, next: NextFunction) =>
    authController.register(req, res, next)
);
userRouter.post(
  '/login',
  loginValidator,
  (req: Request, res: Response, next: NextFunction) =>
    authController.login(req, res, next)
);

// protected route
userRouter.post(
  "/logout", authentication, 
  (req:Request, res:Response, next:NextFunction) => 
    authController.logout(req, res, next)
);
userRouter.put("/update-profile", 
  authentication, updateProfileValidator,
  (req:AuthenticatedRequest, res:Response, next:NextFunction) => authController.updateProfile(req, res, next)
);
userRouter.get("/profile", 
  authentication, 
  (req:AuthenticatedRequest, res:Response, next:NextFunction) => authController.getProfile(req, res, next)
)
userRouter.patch("/update-password", 
  authentication, updatePasswordValidator,
  (req:AuthenticatedRequest, res:Response, next:NextFunction) => authController.updatePassword(req, res, next)
)
userRouter.post("/send-otp", sendOtpValidator,
  (req:Request, res:Response, next:NextFunction) => authController.sendOtp(req, res, next)
)
userRouter.post("/verify-otp", verifyOtpValidator, (req:Request, res:Response, next:NextFunction) => authController.verifyOtp(req,res,next))

userRouter.patch("/change-password", changePasswordValidator, (req:Request, res:Response, next:NextFunction) => authController.changePassword(req, res, next))









export default userRouter;
// User Router setup
