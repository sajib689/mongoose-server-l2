import express, { Request, Response } from "express"
import { NewNote } from "../models/notes.model";

const notesRouter = express.Router()

notesRouter.post("/notes", async (req: Request, res: Response) => {
  const { title, content } = req.body;
  const myNote = await new NewNote({ title, content }).save();
  res.status(200).json({
    success: true,
    message: "cudir vai valo ho",
    myNote,
  });
});

notesRouter.get("/notes", async (req: Request, res: Response) => {
  try {
    const data = await NewNote.find();
    res.status(200).json({
      success: 200,
      message: "Cudir vai ay nea tor data",
      data,
    });
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
});

notesRouter.delete("/notes/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    console.log(id);
    if (!id) {
      return `Sala id koi?`;
    }

    const result = await NewNote.deleteOne({ _id: id });
    res.status(200).json({
      success: 200,
      message: "Sala delete korea dili?",
      result,
    });
  } catch (err) {
    console.log(err);
  }
});
notesRouter.patch("/notes/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const result = await NewNote.updateOne({ _id: id }, { $set: updateData });
    res.status(200).json({
      success: 200,
      message: "Dur sala data update korli",
      result,
    });
  } catch (error) {
    console.log(error);
  }
});

export default notesRouter