import express from "express";
import router from "./Routes/routes.js";
import { sequelize } from "./Database/database.js";

import bodyParser from 'body-parser';
import cors from 'cors';

//Crear Instancia
const app = express();


//Montar enrutador en app principal

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(router);
app.set("port", 3000);

//Test a Base de datos
const testDb = async () => {
  try {
    await sequelize.sync();
    console.log(`Conexion realizada con éxito`);
    //Correr Servicio por puerto 3000
    app.listen(app.get("port"), () => {
      console.log(`Servidor Escuchando por puerto ${app.get("port")}`);
    });
  } catch (error) {
    console.log(`Error al realizar conexión ${error}`);
  }
};

testDb();
