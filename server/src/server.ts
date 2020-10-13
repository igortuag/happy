import express from 'express';
import path from 'path';

import './database/conection';

import rotues from './routes';

const app = express();

app.use(express.json());
app.use(rotues);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.listen(3333);
