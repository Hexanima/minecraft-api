import { describe, expect, test } from "vitest";
import { JsonFiles, JsonService } from "./json-service";

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
      });
    }
  });
});
