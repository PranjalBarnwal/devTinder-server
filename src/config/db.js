const mongoose = require("mongoose");
const { ModuleDetectionKind } = require("typescript");

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://supersecretpass:supersecretpass@namastenode.bsqkb.mongodb.net/DevTinder"
    );
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};


module.exports = connectDb;