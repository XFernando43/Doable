import express from 'express';
import "dotenv/config";





export const app = express();
const port = process.env["PORT"]


app.listen(port, () => {console.log(`Servidor escuchando en el puerto ${port}`);});
