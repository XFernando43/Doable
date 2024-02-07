import express from 'express';
import { userRouter } from './App/routers/user.router';
import { boardRouter } from './App/routers/board.router';
import { listRouter } from './App/routers/list.router';
import { cardRouter } from './App/routers/card.router';
import "dotenv/config";


export const app = express();
const port = process.env["PORT"]

app.use(express.json());
app.use("/users",userRouter);
app.use("/board",boardRouter);
app.use("/lists",listRouter);
app.use("/cards",cardRouter);

app.listen(port, () => {console.log(`Servidor escuchando en el puerto ${port}`);});
