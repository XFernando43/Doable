import "dotenv/config";
import { adminClient } from "..";

const dbName = process.env["DATABASE"];

adminClient.connect();

adminClient.query(`CREATE DATABASE "${dbName}"`, (err) => {
  if (err) {
    console.error("Error al crear la base de datos", err.stack);
  } else {
    console.log(`Base de datos "${dbName}" creada exitosamente`);
  }
  adminClient.end();
});
