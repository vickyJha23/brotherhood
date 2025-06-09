import { Request, Response, NextFunction } from 'express';
import { AuthService, TokenService, MailService } from '../services';
import { ApiResponse, ApiError } from '../utils';
import UserDto from '../Dtos/User.dto';
import { AuthenticatedRequest, IUser} from '../types/type';
import { JwtPayload } from 'jsonwebtoken';
import { SentMessageInfo } from 'nodemailer';
import { Types } from 'mongoose';

class AuthController {
  private authService: AuthService;
  private tokenService: TokenService;
  private userDto: UserDto;
  private mailService: MailService;
  constructor(
    authService: AuthService,
    tokenService: TokenService,
    userDto: UserDto,
    mailService: MailService
  ) {
    this.authService = authService;
    this.tokenService = tokenService;
    this.userDto = userDto;
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
      const newUser = await this.authService.saveUserToDB(
        userName,
        email,
        password
      );
      if (!newUser) {
        throw new ApiError('failed to create user', 500, false);
      }
      const userData = this.userDto.userDto(newUser);
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
      // console.log("user", user);
      if (!user) {
        throw new ApiError('Invalid email or password', 400, false); // preferred when data sent is incorrect
      }
      const isPasswordCorrect = await this.authService.verifyPassword(password, user.password);
      if (!isPasswordCorrect) {
        throw new ApiError('Invalid email or password', 400, false);
      }
      const userData = this.userDto.userDto(user);
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
        const userData = this.userDto.userDto(user);
      
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
          const userData = this.userDto.userDto(user);
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
           const isValidPassword = await this.authService.verifyPassword(oldPassword, user.password);
           if(!isValidPassword){
               throw new ApiError("Invalid password", 400, false);
           }
           user.password = newPassword;
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
        const otp = this.authService.generateOtp();
        const info = await this.mailService.sendMail(otp, user.email) as SentMessageInfo;
        if(!info.messageId){
            throw new ApiError("Failed to send OTP", 500, false);
        }
        const savedOtp = await this.authService.storeOtp(user?._id as Types.ObjectId, otp);
        if(!savedOtp){
              throw new ApiError("Failed to store OTP", 500, false);
        }
        res.status(200).json(new ApiResponse("Otp sent successFully", 200, true, {email}))
        
    } catch (error) {
        if(error instanceof Error){
          console.error("Error at sendOtp handler", error);
          next(error);
        }
    }
}

async verifyOtp(req:Request, res:Response, next:NextFunction) {
   try {
      const { email, otp } = req.body;
      const user = await this.authService.findUserByEmail(email);
      if(!user){
          throw new ApiError("User not found", 404, false)
      }
      const storeOtp = await this.authService.getOtp(user._id as Types.ObjectId);
      if(!storeOtp){
           throw new ApiError("Otp not found", 404, false);
      }

      const isOtpExpired = this.authService.checkOtpExpiry(storeOtp);
      
      
      if(isOtpExpired){
          throw new ApiError("Otp has expired", 410, false);
      }

      if(storeOtp.isVerified) {
        throw new ApiError("Otp has already been used", 409, false) 
      }
      

      if(storeOtp.attempts >= 3) {
          throw new ApiError("Too many attempts", 429, false);
      }
      if(storeOtp.otp !== otp){
           await this.authService.updateOtpAttempts(storeOtp._id as Types.ObjectId);   
           throw new ApiError("Invalid otp", 400, false);
      }

      await this.authService.markOtpAsUsed(storeOtp._id as Types.ObjectId)
      res.status(200).json(new ApiResponse("Otp verified successFully", 200, true, {}))
    
   } catch (error) {
     if(error instanceof Error){
         console.error("Error at verifyOtp handler", error)
         next(error);
     }
   }

}

 async changePassword (req:Request, res:Response, next:NextFunction) {
       try {
           const { email, password }  = req.body;
           const user = await this.authService.findUserByEmail(email);
           if(!user){
               throw new ApiError("Invalid email", 400, false);
           }
           user.password = password;
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
              sameSite: 'none', // should with the same domian or ip address then only server will send and set the cookie  otherwise
              secure: true // request should be of type https 
            } as {
              httpOnly: boolean;
              sameSite: "none";
              secure: boolean;
            }
            res.clearCookie("accessToken", options);
            res.clearCookie("refreshToken", options);
            res.status(200).json(new ApiResponse("Logged out successFully", 200, true, {}))
        
        } catch (error) {
           if(error instanceof Error) // applying specific type check to the value to understand the typescript which type of value is 
            {
                console.log("Error at logout handler", error)
                next(error) 
            }
       }
  }
}

export default AuthController;
