import { Request, Response, NextFunction } from 'express';
import { AuthService, TokenService } from '../services';
import bcrypt from 'bcryptjs';
import Config from '../configs/config';
import { ApiResponse, ApiError } from '../utils';
import UserDto from '../Dtos/User.dto';
import { IUser, IUserDto } from '../types/type';
import { JwtPayload } from 'jsonwebtoken';

class AuthController {
  private authService: AuthService;
  private tokenService: TokenService;
  private userDto: UserDto;
  constructor(
    authService: AuthService,
    tokenService: TokenService,
    userDto: UserDto
  ) {
    this.authService = authService;
    this.tokenService = tokenService;
    this.userDto = userDto;
  }
  // this function handle register
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { userName, email, password } = req.body as IUser;
      const user = await this.authService.findUserByEmail(email);
      if (user) {
        throw new ApiError('User already exist', 409, false);
      }
      const hashedPassword = this.hashPassword(password);
      const newUser = await this.authService.saveUserToDB(
        userName,
        email,
        hashedPassword
      );

      const userData = this.userDto.userDto(newUser);

      if (!newUser) {
        throw new ApiError('Server internal error', 500, false);
      }
      res
        .status(201)
        .json(
          new ApiResponse('User created successFully', 201, true, userData)
        );
    } catch (error) {
      console.log('Error at register user', error);
      next(error);
    }
  }

  // this function handle login
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body as {
        email: string;
        password: string;
      };
      const user = await this.authService.findUserByEmail(email);
      if (!user) {
        throw new ApiError('Invalid email or password', 400, false); // preferred when data sent is incorrect
      }
      const isPasswordCorrect = this.comparePassword(password, user.password);
      if (!isPasswordCorrect) {
        throw new ApiError('Invalid email or password', 400, false);
      }
      const modifiedUser = { ...user, password: null } as IUserDto;
      const userData = this.userDto.userDto(modifiedUser);
      const payload: JwtPayload = {
        userId: user._id,
        email: user.email,
      };
      const { accessToken, refreshToken } =
        this.tokenService.generateToken(payload);
      res.cookie('accessToken', accessToken, {
        httpOnly: true, // can only be read and write by server
        maxAge: 24 * 60 * 60 * 1000, // 1 day,
        sameSite: 'strict', // for same site is there then it will send the cookie
        secure: true,
      });
      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        sameSite: 'strict',
        secure: true,
      });
      res
        .status(200)
        .json(new ApiResponse('login successFull', 200, true, userData));
    } catch (error) {
      if (error instanceof Error) {
        console.log('error at register', error);
        next(error);
      }
    }
  }

  hashPassword(password: string): string {
    const salt = bcrypt.genSaltSync(parseInt(Config.SALT_ROUND!));
    const hashedPassword = bcrypt.hashSync(password, salt);
    return hashedPassword;
  }
  comparePassword(currentPassword: string, hashedPassword: string): boolean {
    const isPasswordCorrect = bcrypt.compareSync(
      currentPassword,
      hashedPassword
    );
    return isPasswordCorrect;
  }
}

export default AuthController;
