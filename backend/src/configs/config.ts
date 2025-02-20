import dotenvFlow from 'dotenv-flow';
dotenvFlow.config();
const { PORT, DB_URI, SALT_ROUND, EMAIL, PASSWORD } = process.env;

const Config = {
  PORT,
  DB_URI,
  SALT_ROUND,
  EMAIL,
  PASSWORD
};

export default Config;
