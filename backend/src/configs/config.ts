import dotenvFlow from 'dotenv-flow';
dotenvFlow.config();
const { PORT, DB_URI, SALT_ROUND } = process.env;

const Config = {
  PORT,
  DB_URI,
  SALT_ROUND,
};

export default Config;
