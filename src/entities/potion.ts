export type PotionType = "base" | "positive" | "negative" | "mixed";

export interface Potion {
  id: number;
  effect: string;
  type: PotionType;
  ingredients: number[] | null;
}
