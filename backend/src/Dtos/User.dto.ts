import { IUserDto } from '../types/type';

class UserDto {
  userDto(user: IUserDto): IUserDto {
    // console.log(user);
    const userData: IUserDto = {
      _id: user._id,
      userName: user.userName,
      email: user.email,
      password: null,
    };
    return userData;
  }
}
export default UserDto;
