import express from 'express';
import path from 'path';
import 'express-async-errors';

import './database/conection';

import rotues from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(express.json());
app.use(rotues);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3333);
