import express from 'express';
import bodyParser from 'body-parser';
import api from './api';
const app = express();

app.use(bodyParser.json());
app.use(api());

app.listen(8080);
