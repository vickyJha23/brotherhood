import { model, Schema } from 'mongoose';
import { IUser } from '../types/type';

// through schema we define the structure
const userSchema = new Schema<IUser>(
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
  },
  { timestamps: true }
);

// model is a class which provide the interface to talk with database

const User = model<IUser>('User', userSchema);
export default User;
