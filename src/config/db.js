const mongoose = require("mongoose");
const app = require("../app");

const connectDB = async () => {
  try {
    const mongoURI = process.env.DB_HOST;
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("DB connection failed:", error);
    process.exit(1);
  }
};

module.exports = { connectDB };
