import express, { response } from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.send('Hello World!');
});

app.post('/', (req, res) => {
  return res.json({ message: "Save OK"});
});

app.listen(3000, () => console.log('Server is running!'));