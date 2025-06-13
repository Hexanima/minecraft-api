import { Request, Response } from "express";
import { JsonFiles, JsonService } from "../database/json-service";

export const PotionController = {
  getAllPotions: async (_: Request, res: Response) => {
    await res.json(await JsonService.retrieve(JsonFiles.potions));
  },
};

/*
 * MEJORAR ESTO, HAY QUE HACER TDD Y CLEAN
 * AGREGAR POSIBILIDAD DE FILTROS
 */
