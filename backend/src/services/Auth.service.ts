import { Model, Types } from 'mongoose';
import { IUser} from '../types/type';



class AuthService {
  private userModel: Model<IUser>;
  constructor(userModel: Model<IUser>) {
    this.userModel = userModel;
  }
  async findUserByEmail(email: string):Promise <IUser | null>  {
    const user = await this.userModel.findOne({ email });
    // this method returns firstly matched document
    return user;
  }
  async findUserByIdAndUpdate(id:Types.ObjectId, email:string, _profileUrl?:string): Promise <IUser | null> {
      const updatedUser = await this.userModel.findByIdAndUpdate(id, {email})
      return updatedUser;
  } 
  async findUserById(id:Types.ObjectId):Promise <IUser | null> {
      const user  = await this.userModel.findById({id});
      return user;
  }

  async saveUserToDB(userName: string, email: string, password: string):Promise <IUser | null> {
    const userData = await this.userModel.create({ userName, email, password });
    return userData;
  }
}

export default AuthService;
