import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { IAdminSchema } from "../types/type";
import Config from "../configs/config";

const adminSchema = new mongoose.Schema <IAdminSchema> ({
      userName: {
           type: String,
           required: true,
           trim: true
      },
      email:{
            type: String,
            required: true,
            trim: true,
      },
      password: {
           type: String,
           required: true,
           maxlength: 6
      },
      role: {
        type: String,
        required: true,
        trim: true
      },
      profileUrl: {
        type: String,
        required: true,
        trim: true
      },
      publicId: {
            type: String,
            required: true,
            trim: true
      }
}, {
    timestamps: true,
})

adminSchema.pre("save", async function (next) {
      if(!this.isModified("password")) return next();
      try {
            const saltRounds = await bcrypt.genSalt(Number(Config.SALT_ROUND));
            this.password =  await bcrypt.hash(this.password, saltRounds);
            next();
      } catch (error) {
          if(error instanceof Error){
              console.error("Error while trying to hash password: ", error);
              next(error);
          }
      }
})

const Admin = mongoose.model("Admin", adminSchema);
export default Admin;  // export the model