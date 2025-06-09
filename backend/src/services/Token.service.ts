import jwt, { JwtPayload } from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';
import { ITokens } from '../types/type';

class TokenService {
  generateToken(payload: JwtPayload): ITokens {
    const secretKey = fs.readFileSync(
      path.join(__dirname, '../../certs/privateKey.pem'),
      'utf-8'
      
    );
    const accessToken = jwt.sign(payload, secretKey, {
      algorithm: 'RS256',
      expiresIn: 24 * 60 * 60 * 1000,
    });
    const refreshToken = jwt.sign(payload, secretKey, {
      algorithm: 'RS256',
      expiresIn: 24 * 7 * 60 * 60 * 1000,
    });
    return { accessToken, refreshToken };
  }
}

export default TokenService;
