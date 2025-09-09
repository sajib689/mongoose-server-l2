import { model, Schema } from "mongoose";

export interface IUser {
  firstName: string;
  lastName: string;
  age: number;
}

const userSchema = new Schema<IUser>({
  firstName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 100,
  },
});

export const User = model<IUser>("User", userSchema);
