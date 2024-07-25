import { Request, Response, NextFunction } from 'express';
import {ApiError} from '../functions/src/entities/ApiError';

export const errorHandler = (err: ApiError, req: Request, res: Response, next: NextFunction) => {
  const status = err.statusCode || 500;
  res.status(status).send({
    message: err.message,
    details: err.details,
  });
};
