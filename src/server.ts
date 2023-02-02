import express, { NextFunction, Request, Response } from 'express';
import { errorHandler } from './middlewares/errorHandler';
import routes from './routes';

const PORT = 80;

const app = express();

app.use('/api', routes);

app.get('/', (req, res) => {
  res.json({ msg: 'TANGO CHALLENGE' });
});

// Error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Tango api-challenge listening on port ${PORT}`);
});
