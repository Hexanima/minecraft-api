import express from "express";
import PotionRouter from "./routes/potion-router";

const app = express();

app.use("/potions", PotionRouter);

app.listen(3000, () => console.log("Listening to port 3000"));
