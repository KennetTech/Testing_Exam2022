import express from "express";
import cors from "cors";
import { Recipe } from "./Database/Schema.js";
import connection from "./Database/connection.js";

const PORT = process.env.PORT || 3000;
var app = express();

connection()

const corsOptions = {
  origin: PORT,
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/recipes/lasagne", async (req, res, next) => {
  const Lasagne = await Recipe.findOne({ Name: "Lasagne" });
  res.json(Lasagne);
});

app.get("/recipes/pancakes", async (req, res, next) => {
  const Pancakes = await Recipe.findOne({ Name: "Pancakes" });
  res.json(Pancakes);
});