const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("UNCAUGHT EXCEPTION. SHUTTING DOWN");
  process.exit(1);
});

dotenv.config({ path: "./.env" });

const db = process.env.DATABASE.replace(
  "<password>",
  process.env.MONGODB_PASSWORD
);

mongoose
  .connect(db)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 8000;

const server = app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("UNHANDLED REJECTION. SHUTTING DOWN");
  server.close(() => {
    process.exit(1);
  });
});
