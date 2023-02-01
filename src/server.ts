import express from 'express';

const app = express();
const port = 4002;

app.get('/', (req, res) => {
  res.json({ msg: 'hello' });
});

app.listen(port, () => {
  console.log(`Tango api-challenge listening on port ${port}`);
});
