import { Router } from "express";
import { PotionController } from "../controllers/potion-controller";

const PotionRouter = Router();

PotionRouter.get("/", PotionController.getAllPotions);

export default PotionRouter;
