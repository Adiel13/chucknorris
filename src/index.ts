import express from 'express';
import dotenv from 'dotenv';
import { Application } from 'express';
import router from './routes';
dotenv.config();
const app :Application = express();
const port = process.env.PORT;
const bodyparser = require("body-parser");

app.use(bodyparser.json());
app.use(router);
app.listen(port, ()=>{
    console.log("estoy ejecutando desde el puerto " + port);
});