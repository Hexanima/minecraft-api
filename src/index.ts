import express from "express";
import PotionRouter from "./routes/potion-router";
import cors from "cors";

const app = express();

app.use(cors({origin: "http://localhost:5173"}));

app.use("/potions", PotionRouter);

app.listen(3000, () => console.log("Listening to port 3000"));
