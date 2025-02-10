import { registerValidator, loginValidator } from '../validators';
import AuthController from '../controllers/Auth.controller';
import { AuthService, TokenService } from '../services';
import UserDto from '../Dtos/User.dto';
import { Router, Request, Response, NextFunction } from 'express';
import { User } from '../models';

const userRouter = Router();

// dependencies setup
const authService = new AuthService(User);
const tokenService = new TokenService();
const userDto = new UserDto();

const authController = new AuthController(authService, tokenService, userDto);

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

export default userRouter;
// User Router setup
