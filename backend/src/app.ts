import express, { Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import { userRouter } from './routes';
import { ApiError } from './utils';
import cors from "cors";

const app = express();

// setup middlewares
app.use(express.json({ limit: '1MB' })); // data is coming json formate
app.use(express.urlencoded({ extended: true, limit: '1MB' })); // to read the url encoded data and makes it available in request that boday
app.use(cookieParser()); // header se cookie ko read karke req.cookies me available karn waala according to their name
app.use(express.static('public'));
app.use(cors({
      origin: "http://localhost:5173"
}))

// rotues setup

app.use('/api/v1/user', userRouter);

// global error handler setup

/* eslint-disable @typescript-eslint/no-unused-vars */
app.use((error: ApiError, req: Request, res: Response, _next: NextFunction) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
      status: error.status || 500,
      success: false,
      ip: req.ip,
      url: req.url,
      stack: error.stack ?? null,
    },
  });
});

export default app;
