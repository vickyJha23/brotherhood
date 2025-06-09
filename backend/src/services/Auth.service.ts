import { Model, Types } from 'mongoose';
import { IUser, IOtp} from '../types/type';
import bcrypt from "bcryptjs";



class AuthService {
  private userModel: Model<IUser>;
  private otpModel: Model<IOtp>
  constructor(userModel: Model<IUser>, otpModel:Model<IOtp>) {
    this.userModel = userModel;
    this.otpModel = otpModel
  }

  async findUserByEmail(email: string):Promise <IUser | null>  {
    const user = await this.userModel.findOne({ email });
    // this method returns firstly matched document
    return user;
  }
  async findUserByIdAndUpdate(id:Types.ObjectId, email:string, _profileUrl?:string): Promise <IUser | null> {
      const updatedUser = await this.userModel.findByIdAndUpdate(id, {email})
      return updatedUser;
  } 
  async findUserById(id:Types.ObjectId):Promise <IUser | null> {
      const user  = await this.userModel.findById({id});
      return user;
  }

  async saveUserToDB(userName: string, email: string, password: string):Promise <IUser | null> {
    const userData = await this.userModel.create({ userName, email, password });
    return userData;
  }


  async verifyPassword(loginPassword:string, storedPassword:string) {
        const isValid = await bcrypt.compare(loginPassword, storedPassword);
        return isValid; 
  }

  generateOtp():number {
           const otp = Math.floor(100000 + Math.random() * 900000);
           return otp;
      }
      async storeOtp(userId:Types.ObjectId, Otp:number):Promise<IOtp | null> {
          const otp = this.otpModel.create({userId, Otp})
          return otp;   
      }
     async getOtp(id:Types.ObjectId): Promise <IOtp | null > {
         const otp = await this.otpModel.findById(id);
         return otp;
     }
  
     checkOtpExpiry(otp:IOtp):boolean {
         const EXPIRY_TIME_MS = 5 * 60 * 1000;
         const currentTime = Date.now();
         const timeDiff = currentTime - otp.createdAt.getTime();
         return timeDiff > EXPIRY_TIME_MS;
     }
     
    async updateOtpAttempts (id:Types.ObjectId) {
      const updatedOtp =  await this.otpModel.findByIdAndUpdate(id, {
           $inc: {attempts: 1}   
      }, {new: true})
      return updatedOtp;       
    }
   async markOtpAsUsed(id:Types.ObjectId){
        return await this.otpModel.findByIdAndUpdate(id, {
           isVerified: true
        }, {
          new: true
        })
   }
}

export default AuthService;
