import { Response, Request, NextFunction } from 'express';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
  if (!err) {
    res.json({ message: 'INTERNAL_SERVER_ERROR' });
  }
  res.json({ status: 'error', message: err.message || 'Something went wrong' });
};
