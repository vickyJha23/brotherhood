import { IOtp } from "../types/type";
import { Model, Types } from "mongoose"

class OtpService {
    private otpModel: Model<IOtp> 
   constructor(otpModel:Model<IOtp>) {
         this.otpModel = otpModel
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


export default OtpService;