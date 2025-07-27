import path from "path";
import fs from "fs";
import process from "process";
import { Ingredient } from "../entities/ingredient";
import { Potion } from "../entities/potion";

export const JsonFiles = {
  ingredients: "ingredients",
  potions: "potions",
} as const;

export type JsonFileEntities = {
  ingredients: Ingredient;
  potions: Potion;
};

export type JsonFiles = keyof typeof JsonFiles;

export interface JsonServiceFunctionalities {
  retrieve: (folder: JsonFiles) => Promise<JsonFileEntities[typeof folder][]>;
  overwrite: (
    folder: JsonFiles,
    data: JsonFileEntities[typeof folder][]
  ) => Promise<void | Error>;
}

export const JsonService: JsonServiceFunctionalities = {
  retrieve: async (folder: JsonFiles) => {
    const file = fs.readFileSync(
      path.join(process.cwd(), "src", "database", `${folder}.json`),
      "utf-8"
    );
    return JSON.parse(file) satisfies JsonFileEntities[typeof folder][];
  },
  overwrite: async (
    folder: JsonFiles,
    data: JsonFileEntities[typeof folder][]
  ) => {
    fs.writeFileSync(
      path.join(process.cwd(), "src", "database", `${folder}.json`),
      JSON.stringify(data),
      "utf-8"
    );
  },
};
