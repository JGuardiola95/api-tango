import express from 'express';
import routes from './routes';

const PORT = 4002;

const app = express();

app.use('/api', routes);

app.get('/', (req, res) => {
  res.json({ msg: 'TANGO CHALLENGE' });
});

app.listen(PORT, () => {
  console.log(`Tango api-challenge listening on port ${PORT}`);
});
