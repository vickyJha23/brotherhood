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
    async storeOtp(userId:Types.ObjectId, Otp:number):Promise<IOtp> {
        const otp = this.otpModel.create({userId, Otp})
        return otp;   
    }

}


export default OtpService;