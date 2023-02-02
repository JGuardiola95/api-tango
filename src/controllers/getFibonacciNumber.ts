import { NextFunction, Request, Response } from 'express';
import calculateFibonacciNumber from '../utils/calculateFibonacciNumber';

interface fibonacciRequest extends Request {
  params: {
    number: string;
  };
}
export const getFibonacciNumber = (req: fibonacciRequest, res: Response, next: NextFunction) => {
  try {
    const { number } = req.params;

    if (!number) {
      throw new Error('Number is needed');
    }

    if (typeof Number(number) !== 'number') {
      throw new Error('Input is not a number');
    }

    const fibonacciNumber = calculateFibonacciNumber(Number(number));

    res.json({ fibonacciNumber });
  } catch (error) {
    next(error);
  }
};
