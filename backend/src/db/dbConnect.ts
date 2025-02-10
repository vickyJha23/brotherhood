import mongoose from 'mongoose';
import Config from '../configs/config';

const dbConnect = async () => {
  try {
    mongoose.connection.on('error', () => {
      console.log('Error while connecting to database');
    });
    mongoose.connection.on('connected', () => {
      console.log('Connected to database');
    });
    mongoose.connection.on('disconnected', () => {
      console.log('disconnected from database');
    });
    await mongoose.connect(Config.DB_URI!);
  } catch (error) {
    console.log('Error while connecting to database', error);
    process.exit(1);
  }
};

export default dbConnect;
