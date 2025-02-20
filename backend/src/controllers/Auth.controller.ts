import { Request, Response, NextFunction } from 'express';
import { AuthService, TokenService, OtpService, MailService } from '../services';
import bcrypt from 'bcryptjs';
import Config from '../configs/config';
import { ApiResponse, ApiError } from '../utils';
import UserDto from '../Dtos/User.dto';
import { AuthenticatedRequest, IUser, IUserDto } from '../types/type';
import { JwtPayload } from 'jsonwebtoken';
import { SentMessageInfo } from 'nodemailer';

class AuthController {
  private authService: AuthService;
  private tokenService: TokenService;
  private userDto: UserDto;
  private otpService: OtpService;
  private mailService: MailService;
  constructor(
    authService: AuthService,
    tokenService: TokenService,
    userDto: UserDto,
    otpService: OtpService,
    mailService: MailService
  ) {
    this.authService = authService;
    this.tokenService = tokenService;
    this.userDto = userDto;
    this.otpService = otpService
    this.mailService = mailService
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

      const modifiedUser = {...newUser, password: null} as IUserDto;
      const userData = this.userDto.userDto(modifiedUser);

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


 async updateProfile (req:AuthenticatedRequest, res:Response, next:NextFunction) {
    try {
        const { email } = req.body;
        const { userId:id } = req.user as JwtPayload;
        const user = await this.authService.findUserByIdAndUpdate(id, email);
        if(!user){
            throw new ApiError("User not found", 404, false);
        }
        const modifiedUser = {...user, password: null} as IUserDto;
        const userData = this.userDto.userDto(modifiedUser);
      
        res.status(200).json(new ApiResponse("Profile updated successFully", 200, true, userData))
    } catch (error) {
        if(error instanceof Error){
            next(error);
        }
    }
 }


 async getProfile (req:AuthenticatedRequest, res:Response, next:NextFunction) {
      try {
          const {userId:id} = req.user as JwtPayload;
          const user =  await this.authService.findUserById(id);
          if(!user){
              throw new ApiError("User not found", 404, false);
          }
          const modifiedUser = {...user, password: null} as IUserDto;
          const userData = this.userDto.userDto(modifiedUser);
          res.status(200).json(new ApiResponse("Profile fetched successFully", 200, true, userData));
        
      } catch (error) {
         if(error instanceof Error){
             console.error("Error at getProfile handler", error)
             next(error);
         }      
      }
 }

 async updatePassword (req:AuthenticatedRequest, res:Response, next:NextFunction) {
       try {
          const { oldPassword, newPassword } = req.body;
          const {userId:id} = req.user as JwtPayload;
          const user = await this.authService.findUserById(id);
          if(!user){
               throw new ApiError("User not found", 404, false);
           }
           const isValidPassword = this.comparePassword(oldPassword, user.password);
           if(!isValidPassword){
               throw new ApiError("Invalid password", 400, false);
           }
           const hashedPassword = this.hashPassword(newPassword);
           user.password = hashedPassword;
           await user.save({validateModifiedOnly: true});
           res.status(200).json(new ApiResponse("Password updated successFully", 200, false, {})) 
       } catch (error) {
          if(error instanceof Error){
              console.error("🚨 Error at updatePassword handler:", error);
              next(error);
          }
       } 
 }

async sendOtp(req:Request, res:Response, next:NextFunction) {
    try {
        const { email } = req.body;
        const user = await this.authService.findUserByEmail(email);
        if(!user){
            throw new ApiError("User not found", 404, false);
        }
        const otp = this.otpService.generateOtp();
        const info:SentMessageInfo = await this.mailService.sendMail(otp, user.email);
        if(info.messageId){
          
           res.status(200).json(new ApiResponse("Otp has been sent successFully", 200, true, {}))
        }
        
    } catch (error) {
        if(error instanceof Error){
          console.error("Error at sendOtp handler", error);
          next(error);
        }
    }
}


 async chanagePassword (req:Request, res:Response, next:NextFunction) {
       try {
           const { email, password }  = req.body;
           const user = await this.authService.findUserByEmail(email);
           if(!user){
               throw new ApiError("Invalid email", 400, false);
           }
           const hashedPassword = this.hashPassword(password);
           user.password = hashedPassword;
           await user.save({validateModifiedOnly: true});
           
           res.status(200).json(new ApiResponse("Password changed successFully", 200, true, {}));
       } catch (error) {
           if(error instanceof Error){
               console.error("🚨 Error at changePassword handler:", error)
               next(error);
           }
        }

    }

  logout(_req:Request, res: Response, next:NextFunction) {
       try {
           // while clearing it important to clear with options otherwise the cookie won't be deleted properly
            const options = {
              httpOnly: true, // only server can read and write
              sameSite: 'strict', // should with the same domian or ip address then only server will send and set the cookie  otherwise
              secure: true // request should be of type https 
            } as {
              httpOnly: boolean;
              sameSite: 'strict';
              secure: boolean;
            }
            res.clearCookie("accessToken", options).clearCookie("refreshToken", options);
            res.status(200).json(new ApiResponse("Logged out successFully", 200, true, {}))
        
        } catch (error) {
           if(error instanceof Error) // applying specific type check to the value to understand the typescript which type of value is 
            {
                console.log("Error at logout handler", error)
                next(error) 
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
