import { Model } from 'mongoose';
import { IUser, IUserDto } from '../types/type';

class AuthService {
  private userModel: Model<IUser>;
  constructor(userModel: Model<IUser>) {
    this.userModel = userModel;
  }
  async findUserByEmail(email: string) {
    console.log(email);
    const user = await this.userModel.findOne({ email });
    console.log(user); // this method returns firstly matched document
    return user;
  }
  async saveUserToDB(userName: string, email: string, password: string) {
    const userData = await this.userModel.create({ userName, email, password });
    const userDataWithoutPassword = { ...userData, password: null } as IUserDto;
    return userDataWithoutPassword;
  }
}

export default AuthService;
