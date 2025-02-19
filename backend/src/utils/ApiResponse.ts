import { IUserDto } from '../types/type';

class ApiResponse {
  message: string;
  status: number;
  data: IUserDto | {};
  success: boolean;
  constructor(
    message: string,
    status: number,
    success: boolean,
    data: IUserDto | {}
  ) {
    this.message = message;
    this.status = status;
    this.data = data;
    this.success = success;
  }
}

export default ApiResponse;
