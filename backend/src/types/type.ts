import { Document, Types } from 'mongoose';
import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export interface IUser extends Document {
  userName: string;
  email: string;
  password: string;
  role:string
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

export interface AuthenticatedRequest extends Request {
     user?:JwtPayload
}

export interface IMailOptions {
  from: string;
  to: string;
  subject: string;
  text: string;
}

export interface IOtp extends Document{
     userId: Types.ObjectId,
     otp: string,
     attempts: number,
     isVerified: boolean
     createdAt: Date
}

export interface IUserReturnType{
  _id: Types.ObjectId,
  userName: string,
  email: string
  password: string
}

export interface IAdminSchema extends Document{
      userName: string,
      email: string,
      password: string,
      role: string,
      profileUrl: string,
      publicId: string
}

export interface IAdminOtpSchema extends IOtp {
     adminId: Types.ObjectId,
}
