import { Response, Request, NextFunction } from 'express';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
  if (!err) {
    res.status(500).json({ message: 'INTERNAL_SERVER_ERROR' });
  }
  res.status(422).json({ status: 'error', message: err.message || 'Something went wrong' });
};
