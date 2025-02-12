import { Document, Types } from 'mongoose';

export interface IUser extends Document {
  userName: string;
  email: string;
  password: string;
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface IUserDto {
  _id: Types.ObjectId;
  userName: string;
  email: string;
  password: null;
}
