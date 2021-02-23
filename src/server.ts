import 'reflect-metadata';
import express, { response } from 'express';
import './database';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);


app.listen(3000, () => console.log('Server is running!'));