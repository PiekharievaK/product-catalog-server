const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectDB } = require('./config/db');
const productsRouter = require("./routes/products");
const phonesRouter = require("./routes/phones");
const tabletsRouter = require("./routes/tablets");
const accesRouter = require("./routes/accesorise");
const authRouter = require('./routes/auth')

dotenv.config();

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

connectDB();

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).send("<h2>Homepage</h2>");
});

app.use("/auth", authRouter);
app.use("/products", productsRouter);
app.use("/phones", phonesRouter);
app.use("/tablets", tabletsRouter);
app.use("/accessories", accesRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found 404" });
});

app.use((err, req, res, next) => {
  if (err.status) {
    res.status(err.status).json({ message: err.message });
  } else {
    res.status(500).json({ message: err.message });
  }
});


app.listen(process.env.PORT, () => {
  console.log(`Server running at port:${process.env.PORT}`);
});

module.exports = app;
