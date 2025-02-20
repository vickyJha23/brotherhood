import {Schema, model} from "mongoose";
import { IOtp } from "../types/type";

const otpSchema = new Schema<IOtp>({
      userId: {
           type: Schema.Types.ObjectId,
           ref: 'User',
           required: true
      },
      otp: {
           type: String,
           required: true
      },
      createdAt:{
           type: Date,
           default: Date.now,
           expires: 300
      } 
})

const Otp = model<IOtp>("Otp", otpSchema);
export default Otp
