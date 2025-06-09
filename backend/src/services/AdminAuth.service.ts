import { Model, Types } from "mongoose";
import { IAdminOtpSchema, IAdminSchema } from "../types/type";
import bcrypt  from "bcryptjs";


class AdminAuthService{
      private Admin: Model<IAdminSchema>;
      private AdminOtp : Model <IAdminOtpSchema>
      constructor(Admin: Model <IAdminSchema>, AdminOtp: Model<IAdminOtpSchema>) {
             this.Admin = Admin;
             this.AdminOtp = AdminOtp
      }

     async createAdmin(adminData : IAdminSchema): Promise <IAdminSchema | null > {
            const admin = await this.Admin.create(adminData);
            return admin;
      } 

      async findAdminByEmail(email: string): Promise <IAdminSchema | null > {
            const admin = await this.Admin.findOne({email});
            return admin;       
       }

      async findAdminById(id: Types.ObjectId):Promise <IAdminSchema | null > {
            const admin = await this.Admin.findById(id);
            return admin;
      } 
     async verifyPassword (loginPassword:string, storedPassword:string) : Promise <boolean> {
          const isVerified = await bcrypt.compare(loginPassword, storedPassword);
          return isVerified; 
      }  

     async createAdminOtp(otpData:IAdminOtpSchema) {
            const otp = await this.AdminOtp.create(otpData);
            return otp;
     } 


}

export default AdminAuthService;