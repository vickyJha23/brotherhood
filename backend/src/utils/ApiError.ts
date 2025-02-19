class ApiError extends Error {
  public status: number;
  public success: boolean;
  constructor(message: string, status: number, success: boolean) {
    super(message);
    this.status = status;
    this.success = success;
    Object.setPrototypeOf(this, new.target.prototype)
  }
}

export default ApiError;
