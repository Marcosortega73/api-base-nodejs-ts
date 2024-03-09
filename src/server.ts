import "dotenv/config";
import express from 'express';
import cors from './config/cors'
import  routes  from './routes';
import { DB } from "./config";

const app = express();

app.use(cors); //middleware que permite el acceso a la api desde el origen que se configure en cors.ts
app.use(express.urlencoded({ extended: true })); //middleware que permite el envio de datos desde un formulario
app.use(express.json()); //middleware que transforma la req.body en json

const PORT = process.env.PORT || 3000;

const API_URL = process.env.API_URL || 'http://localhost';

app.use(routes);

DB.sync({ force: true })
  .then(() => console.log("Database synchronized"))
  .catch((err) => console.log(err));


app.listen(PORT, () => {
    console.log(`Server is running on port ${API_URL}`);
});
