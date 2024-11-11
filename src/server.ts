import express from 'express';
import connectDB from '@config/db';
import config from '@config/config';
import userRoutes from '@routes/userRoutes';
import passport from '@config/passport';
import errorHandler from '@middleware/errorHandler';

const app = express();

app.use(express.json());
app.use(passport.initialize());
app.use('/api/v1', userRoutes);
app.use(errorHandler);

const startServer = async () => {
  await connectDB();
  const server = app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
  });
  
  return server;
};

export { app, startServer };