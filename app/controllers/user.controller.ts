import express, { Request, Response } from "express";
import { User } from "../models/user.model";
import z, { success } from "zod";

const usersRouter = express.Router();

const crateUseZodSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  age: z.number(),
});

usersRouter.post("/users", async (req: Request, res: Response) => {
  try {
    const data = await crateUseZodSchema.parseAsync(req.body);
    const result = await User.create(data);
    res.status(200).json({
      success: 200,
      message: "Sala New User Created Success",
      result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error?.message,
    });
  }
});

export default usersRouter;
