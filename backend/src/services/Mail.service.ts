import nodemailer, { Transporter, SentMessageInfo } from "nodemailer";
import { ApiError } from "../utils";
import { IMailOptions } from "../types/type";
import Config from "../configs/config";


class MailService {
    public transporter: Transporter;
    constructor(){
         this.transporter = nodemailer.createTransport({
             host: 'smtp.gmail.com',
             port: 587,
             secure: false,
             auth: {
                user: Config.EMAIL,
                pass: Config.PASSWORD
             }
         })
    }    
   async sendMail(otp:number, userEmail:string) {
         try {
            const mailOptions:IMailOptions = {
                from: Config.EMAIL!,
                to: userEmail,
                subject: "OTP",
                text: `Your OTP is ${otp}`,
            }
            const info = await this.transporter.sendMail(mailOptions) as SentMessageInfo;
            return info;
            
         } catch (error) {
            if(error instanceof Error){
                throw new ApiError(error.message, 500, false);
            }
         }
    }

}

export default MailService;