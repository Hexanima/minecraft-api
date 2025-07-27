import { describe, expect, test } from "vitest";
import { JsonFiles, JsonService } from "./json-service";
import { PotionCost, PotionType } from "../entities/potion";

describe("JsonService Test", async () => {
  test("Should return a JSON", async () => {
    const ingredients = await JsonService.retrieve(JsonFiles.ingredients);

    expect(ingredients).toBeInstanceOf(Array);
    expect(ingredients).toHaveLength(17);

    for (const ingredient of ingredients) {
      expect(ingredient).toEqual({
        id: expect.any(Number),
        name: expect.any(String),
      });
    }

    const potions = await JsonService.retrieve(JsonFiles.potions);

    expect(potions).toBeInstanceOf(Array);
    expect(potions).toHaveLength(20);

    for (const potion of potions) {
      expect(potion).toEqual({
        id: expect.any(Number),
        effect: expect.any(String),
        ingredients: expect.any(Array),
        costs: expect.objectContaining({
          base: expect.any(Number),
          perDurationLevel: expect.any(Number),
          perStrengthLevel: expect.any(Number),
          toSplash: expect.any(Number),
          toSplashAndDragon: expect.any(Number),
        }),
        duration: expect.any(Number),
        type: expect.toBeOneOf([
          "base",
          "positive",
          "negative",
          "mixed",
        ] satisfies PotionType[]),
      });
    }
  });
  test("Should keep everything as is", async () => {
    const ingredients = await JsonService.retrieve(JsonFiles.ingredients);
    const potions = await JsonService.retrieve(JsonFiles.potions);

    expect(potions).toBeInstanceOf(Array);
    expect(potions).toHaveLength(20);

    expect(ingredients).toBeInstanceOf(Array);
    expect(ingredients).toHaveLength(17);

    await JsonService.overwrite(JsonFiles.ingredients, ingredients);
    await JsonService.overwrite(JsonFiles.potions, potions);
    const ingredients2 = await JsonService.retrieve(JsonFiles.ingredients);
    const potions2 = await JsonService.retrieve(JsonFiles.potions);


    expect(ingredients2).toBeInstanceOf(Array);
    expect(ingredients2).toHaveLength(17);

    expect(potions2).toBeInstanceOf(Array);
    expect(potions2).toHaveLength(20);
  });
});
