export type PotionType = "base" | "positive" | "negative" | "mixed";

export interface PotionCost {
  base: number;
  perDurationLevel: number;
  perStrengthLevel: number;
  toSplash: number;
  toSplashAndDragon: number;
}

export interface Potion {
  id: number;
  effect: string;
  type: PotionType;
  ingredients: number[] | null;
  instant: boolean;
  duration: number;
  costs: PotionCost;
}
