import Joi, { ValidationResult } from 'joi';
import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../utils';


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
      .min(6)
      .max(12)
      .required(),
  });
  const result: ValidationResult = registerSchema.validate(
    req.body
  ) as ValidationResult;

  if (result.error) {
    next(new ApiError(result.error.message, 400, false));
  }
  req.body = result.value;
  return next();
};

const loginValidator = (req: Request, _res: Response, next: NextFunction) => {
  const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string()
      .pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/))
      .min(6)
      .max(12)
      .required(),
  });

  const result = loginSchema.validate(
    req.body
  ) as ValidationResult;

  if (result.error) {
    next(new ApiError(result.error.message, 400, false));
  }
  req.body = result.value;
  return next();
};

const updateProfileValidator = (req:Request, _res:Response, next:NextFunction) => {
     const updateProfileSchema = Joi.object({
           email: Joi.string().email().required()
     })
     const result = updateProfileSchema.validate(req.body) as ValidationResult;
     if(result.error){
          next(new ApiError(result.error.message, 400, false));
     }
     req.body = result.value;
     return next();
}

const updatePasswordValidator = (req:Request, _res:Response, next:NextFunction) => {
     const updatePasswordSchema = Joi.object({
          oldPassword: Joi.string().pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)).min(6).max(12).required(),
          newPassword: Joi.ref("oldPassword")
     })
     const result = updatePasswordSchema.validate(req.body) as ValidationResult;
     if(result.error){
          next(new ApiError(result.error.message, 400, false));
     }
     req.body = result.value;
     return next();
}
const sendOtpValidator = (req:Request, _res:Response, next:NextFunction) => {
      const sendOtpSchema = Joi.object({
            email: Joi.string().email().required(),
      })   
     const result = sendOtpSchema.validate(req.body);
     if(result.error){
         next(new ApiError(result.error.message, 400, false));
     }
     req.body = result.value;
     return next();
}

const verifyOtpValidator = (req:Request, _res:Response, next:NextFunction) => {
      const verifyOtpSchema = Joi.object({
             otp: Joi.string().required().min(6).max(12),
             email: Joi.string().email().required(),
      })
      const result = verifyOtpSchema.validate(req.body);
      if(result.error){
        next(new ApiError(result.error.message, 400, false));
      }
      req.body = result.value;
      return next();
}

const changePasswordValidator = (req:Request, _res:Response, next:NextFunction) => {
    const changePasswordSchema = Joi.object({
         email: Joi.string().required().email(),
         password: Joi.string().pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)).min(6).max(12).required()
    })
    const result = changePasswordSchema.validate(req.body) as ValidationResult;
    if(result.error){
         next(new ApiError(result.error.message, 400, false));
    }
    req.body = result.value;
    return next();
}

const adminRegisterValidator = (req:Request, _res:Response, next:NextFunction) => {
     const adminRegisterSchema = Joi.object({
            userName: Joi.string().required().alphanum().min(3).max(6),
            email: Joi.string().email().required(),
            password: Joi.string().pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)).min(6).max(12),
            role:Joi.string().required().valid("admin"),
            profileUrl: Joi.string()
     })

     const {error, value} = adminRegisterSchema.validate(req.body) as ValidationResult;
     if(error){
         return next(new ApiError(error.message, 400, false));
     }
     req.body = value;
     return next();
}



export { registerValidator, loginValidator, updateProfileValidator, updatePasswordValidator, sendOtpValidator, verifyOtpValidator, changePasswordValidator, adminRegisterValidator};
