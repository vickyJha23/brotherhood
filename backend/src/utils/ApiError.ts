class ApiError extends Error {
  status: number;
  success: boolean;
  constructor(message: string, status: number, success: boolean) {
    super(message);
    this.status = status;
    this.success = success;
  }
}

export default ApiError;
