import { Schema, model} from "mongoose";
import { IAdminOtpSchema } from "../types/type";

// schema descriptiopn of adminOtp
const adminOtpSchema = new Schema <IAdminOtpSchema> ({
     adminId: {
         type: Schema.Types.ObjectId,
         required: true,
         ref: "Admin"
     },
     otp: {
          type: String,
          required: true,
          maxlength: 6
     },
     attempts: {
        type: Number,
        default: 0,
     },
     isVerified: {
         type: Boolean,
         default: false,
     },
     createdAt: {
          type: Date,
          default: Date.now,
          expires: 300
     }
}, {
       timestamps: true
});

const AdminOtp = model <IAdminOtpSchema> ("AdminOtp", adminOtpSchema);

export default AdminOtp;