import { AdminAuthService, MailService, OtpService, TokenService }from "../services/index";
import { Request, Response, NextFunction } from "express-serve-static-core";
import UserDto from "../Dtos/User.dto";
import { ApiError, ApiResponse } from "../utils";
import handleFileUploadOverCloudinary from "../utils/cloudinary";
import { IAdminSchema, AuthenticatedRequest } from "../types/type";
import { JwtPayload } from "jsonwebtoken";
import { IAdminOtpSchema } from "../types/type";

class AuthAdmin {
    private adminAuthService:AdminAuthService; 
    private adminDto: UserDto;
    private tokenService: TokenService;
    private mailService: MailService;
    private otpService: OtpService

     constructor(adminAuthService: AdminAuthService, adminDto: UserDto, tokenService:TokenService, mailService: MailService, otpService:OtpService ) {
            this.adminAuthService = adminAuthService;
            this.adminDto = adminDto;
            this.tokenService = tokenService;
            this.mailService = mailService
            this.otpService = otpService;
     }

      // this handler will handle the admin registration
     async register(req: Request, res: Response, next: NextFunction) {
       const { userName, email, password, role } = req.body;
     
       try {

         const isAdminExist = await this.adminAuthService.findAdminByEmail(email);
          if (isAdminExist) {
           throw new ApiError("Admin already exists", 409, false);
           }
     
         if (!req.file) {
                 throw new ApiError("No file uploaded. Please upload the file", 400, false);
         }
     
         const filePath = req.file.path;
         const uploadResponse = await handleFileUploadOverCloudinary(filePath);
     
         if (!uploadResponse) {
           throw new ApiError("File upload failed", 500, false);
         }
     
         const { public_id: publicId, secure_url: profileUrl } = uploadResponse;
     
         const admin = await this.adminAuthService.createAdmin({
           userName,
           email,
           password,
           role,
           profileUrl,
           publicId
         } as IAdminSchema);
     
         if (!admin) {
           throw new ApiError("Failed to create admin", 500, false);
         }
     
         const adminData = this.adminDto.userDto(admin);
         res.status(201).json(new ApiResponse("User created successfully", 201, true, adminData));
     
       } catch (error) {
         console.error("❌ error admin register handler", error);
         next(error);
       }
     }

    //  this function handle admin login 

     async login(req:Request, res:Response, next:NextFunction) {
         const { email, password } = req.body; 
      
        try {
            const admin = await this.adminAuthService.findAdminByEmail(email);
            if(!admin){
                 throw new ApiError("Invalid email address", 400, false);
            }
            const isValidPassword = await this.adminAuthService.verifyPassword(password, admin.password);
             if(!isValidPassword){
                 throw new ApiError("Invalid password", 400, false);
             }

             const { accessToken, refreshToken} = this.tokenService.generateToken({
                  id: admin.id,
                  email: admin.email,
                  role: admin.role,
             })
             const adminData = this.adminDto.userDto(admin);
             res.cookie("accessToken", accessToken, {
                  httpOnly: true,
                  secure: true,
                  sameSite: "none",
                  maxAge: 1 * 24 * 60 * 60 * 1000,
             })
             res.cookie("refreshToken", refreshToken, {
                 httpOnly: true,
                 secure: true,
                 sameSite: "none",
                 maxAge: 7 * 24 * 60 * 60 * 1000,
             })

             res.status(200).json(new ApiResponse("Logged in successful", 200, true, adminData))

         } catch (error) {
              console.error("❌ error at login handler of admin: ", error);
              next(error);
         }
      }

    async logout(_req:Request, res:Response, next:NextFunction) {
       try {
        
         res.clearCookie("accessToken", {
            httpOnly: true,
            secure: true,
            sameSite: "none",
         })

         res.clearCookie("refreshToken", {
            httpOnly: true,
            secure: true,
            sameSite: "none",
         })

         res.status(200).json(new ApiResponse("User Logged out successfully", 200, true, {}))
       } catch (error) {
          console.error("❌ error at login handler of admin: ", error)
          next(error)
       }

    }

   async getAdminInfo(req:AuthenticatedRequest, res:Response, next:NextFunction) {
      try {
         const { userId:adminId } = req.user as JwtPayload;
         const admin = await this.adminAuthService.findAdminById(adminId);
         if(!admin){
             throw new ApiError("Admin not found", 404, false);
         }
         const adminData =  this.adminDto.userDto(admin);
         res.status(200).json(new ApiResponse("Admin info retrieved successFully", 200, true, adminData))         
      } catch (error) {
           console.error("Error at getAdminInfo: ",error);
           next(error);
      }
   }

  async sendAdminOtp(req:Request, res:Response, next:NextFunction) {
       try {
            const { email }  = req.query as {
                 email: string
            };
            const admin = await this.adminAuthService.findAdminByEmail(email); 
            if(!admin){
                 throw new ApiError("Invalid email", 400, false);
            }
            const otp = this.otpService.generateOtp();
            const info = await this.mailService.sendMail(otp, admin.email);
          
            if(!info.messageId){
                 throw new ApiError("failed to send mail", 500, false);  
            }
                      
           


       } catch (error) {
             console.error("Error at send top handler: ", error);
             next(error);
       }
  }



}



export default AuthAdmin;