import express from 'express';
import './database/conection';

import rotues from './routes';

const app = express();

app.use(express.json());
app.use(rotues);

app.listen(3333);
