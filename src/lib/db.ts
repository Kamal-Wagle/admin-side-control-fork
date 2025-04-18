import mongoose from "mongoose";

const dbUserName = process.env.DB_USER_NAME;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const dbHost = process.env.DB_HOST;

if (!dbUserName || !dbPassword || !dbName || !dbHost) {
  throw new Error("Missing required environment variables for DB connection");
}

const dbURL = `mongodb+srv://${dbUserName}:${encodeURIComponent(dbPassword)}@${dbHost}/${dbName}?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    await mongoose.connect(dbURL);
    console.log("DB connection established...");
  } catch (error: unknown) {
    // Type the error as an instance of Error
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("Unknown error occurred during DB connection");
    }
    console.log("DB connection failed...");
  }
};

export default connectDB;
