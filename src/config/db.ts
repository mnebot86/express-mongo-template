import mongoose from 'mongoose';
import logger from '@utils/logger';
import config from '@config/config';

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI);
    logger.info(`MongoDB Connected: ${config.mongoURI}`);
  } catch (error) {
    logger.error(`Error: ${error}`);
    process.exit(1);
  }
};

export default connectDB;
