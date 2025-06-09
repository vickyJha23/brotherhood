import { model, Schema } from 'mongoose';
import { IUser } from '../types/type';
import bcrypt from "bcryptjs";
import Config from '../configs/config';

// through schema we define the structure
const userSchema = new Schema <IUser> (
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: [6, 'min length required is 6'],
      max: [12, 'max length required is 12'],
    },
    role: {
      type: String,
      default: 'User'
    }
  },
  { timestamps: true }
);

// model is a class which provide the interface to talk with database


userSchema.pre("save", async function (next) {
      if(!this.isModified("password")){
           return next();
      }
    try {
      const salt =  await bcrypt.genSalt(Number(Config.SALT_ROUND!))
      this.password = await bcrypt.hash(this.password, salt);
       next();
    } catch (error) {
        if(error instanceof Error){
            next(error);
        }
    }
})

const User = model<IUser>('User', userSchema);
export default User;
