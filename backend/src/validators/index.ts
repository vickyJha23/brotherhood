import Joi, { ValidationResult } from 'joi';
import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../utils';
import { IUser } from '../types/type';

const registerValidator = (
  req: Request,
  _res: Response,
  next: NextFunction
): void => {
  const registerSchema = Joi.object({
    userName: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string()
      .pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/))
      .min(3)
      .max(30)
      .required(),
  });
  const result: ValidationResult = registerSchema.validate(
    req.body
  ) as ValidationResult;

  if (result.error) {
    next(new ApiError(result.error.message, 400, false));
  }
  req.body = result.value as IUser;
  return next();
};

const loginValidator = (req: Request, _res: Response, next: NextFunction) => {
  const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string()
      .pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/))
      .min(3)
      .max(30)
      .required(),
  });

  const result: ValidationResult = loginSchema.validate(
    req.body
  ) as ValidationResult;

  if (result.error) {
    next(new ApiError(result.error.message, 400, false));
  }
  req.body = result.value as { email: string; password: string };
  return next();
};

export { registerValidator, loginValidator };
