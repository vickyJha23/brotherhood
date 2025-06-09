import { IUserDto, IUser, IAdminSchema } from '../types/type';
import { Types } from 'mongoose';

class UserDto {
  userDto(user: IUser | IAdminSchema): IUserDto | IAdminSchema {
    // console.log(user);
    const userData: IUserDto = {
      _id: user._id as Types.ObjectId,
      userName: user.userName,
      email: user.email,
      password: null,
    };
    return userData;
  }
}
export default UserDto;
