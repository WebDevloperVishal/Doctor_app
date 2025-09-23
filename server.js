import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import testRoutes from "./routes/testRoutes.js";

//conig env var
dotenv.config();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
app.use("/api/v1/test", testRoutes);

app.get("/", (req, res) => {
  res.send("<h1> Node Server Running </h1>");
});

//port
const PORT = process.env.PORT || 5000;

//run server
app.listen(PORT, () => {
  console.log(
    `Node Server Ruuning in ${process.env.NODE_ENV} Mode On Port ${PORT}`
  );
});