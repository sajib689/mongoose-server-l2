import mongoose from "mongoose";
import { Server } from "http";
import app from "./app";

const port = 5000;
let server: Server;

async function main() {
  try {
    await mongoose.connect("mongodb://localhost:27017/mongoose-server");
    server = app.listen(port, () => {
      console.log(`Server is listing port ${port}`);
    });
  } catch (error) {
    if (error) {
      console.log(error);
    }
  }
}

main();
