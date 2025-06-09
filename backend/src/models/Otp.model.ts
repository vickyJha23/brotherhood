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
           required: true,
           maxlength: 6
      },
      attempts: {
          type: Number,
          default: 0
      },
      isVerified: {
          type: Boolean,
          default: false
      },
      createdAt:{
           type: Date,
           default: Date.now,
           expires: 300
      } 
})

const Otp = model<IOtp>("Otp", otpSchema);
export default Otp
