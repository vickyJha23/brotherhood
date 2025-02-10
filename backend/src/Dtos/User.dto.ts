import { IUserDto } from '../types/type';

class UserDto {
  userDto(user: IUserDto): IUserDto {
    const userData: IUserDto = {
      _id: user._id,
      userName: user.userName,
      email: user.email,
      password: user.password,
    };
    return userData;
  }
}
export default UserDto;
