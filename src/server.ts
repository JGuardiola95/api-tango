import express, { NextFunction, Request, Response } from 'express';
import { errorHandler } from './middlewares/errorHandler';
import routes from './routes';
import cors from 'cors';

const PORT = 80;

export const app = express();

app.use(cors());

app.use('/api', routes);

app.get('/', (req, res) => {
  res.json({ msg: 'TANGO CHALLENGE' });
});

app.use(errorHandler);

export const server = app.listen(PORT, () => {
  console.log(`Tango api-challenge listening on port ${PORT}`);
});
