import { model, Schema } from "mongoose";

interface Note {
  id: string;
  title: string;
  content: string;
}

const noteSchema = new Schema<Note>({
  id: {
    type: String
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
});

export const NewNote = model<Note>("NewNote", noteSchema);
