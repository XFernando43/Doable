import express from 'express';
import { userRouter } from './App/routers/user.router';
import "dotenv/config";
import { boardRouter } from './App/routers/board.router';


export const app = express();
const port = process.env["PORT"]

app.use(express.json());
app.use("/users",userRouter);
app.use("/board",boardRouter);

app.listen(port, () => {console.log(`Servidor escuchando en el puerto ${port}`);});
