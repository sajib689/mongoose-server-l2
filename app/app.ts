import express, { Application } from "express";
import notesRouter from "./controllers/note.controller";
import usersRouter from "./controllers/user.controller";
const app: Application = express();
app.use(express.json());

app.use("/", notesRouter);
app.use("/", usersRouter);

export default app;
