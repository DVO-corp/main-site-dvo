/**
 * Concept sizing helper for the AI infrastructure page.
 *
 * It deliberately produces no price. Cost depends on models, file sizes,
 * latency targets and the chosen provider, so the calculator only points at
 * the infrastructure model worth discussing first.
 */

export type ProcessingType =
  | "image"
  | "video"
  | "speech"
  | "llm"
  | "convert"
  | "data";

export type Frequency = "sporadic" | "daily" | "continuous";

export type Mode = "shared" | "dedicated" | "unsure";

export type Recommendation =
  | "cpuOnly"
  | "sharedPool"
  | "hybrid"
  | "dedicated";

export type LoadProfile = "light" | "medium" | "heavy";

export interface CalculatorInput {
  /** Jobs per month. */
  volume: number;
  type: ProcessingType;
  gpu: boolean;
  frequency: Frequency;
  mode: Mode;
}

/** Relative cost of one job by processing type. */
const TYPE_WEIGHT: Record<ProcessingType, number> = {
  image: 1,
  video: 3.2,
  speech: 0.9,
  llm: 2,
  convert: 0.7,
  data: 0.4,
};

/** How evenly the work arrives — steady streams keep hardware busy. */
const FREQUENCY_WEIGHT: Record<Frequency, number> = {
  sporadic: 1,
  daily: 1.9,
  continuous: 3.4,
};

export const VOLUME_MIN = 100;
export const VOLUME_MAX = 20000;
export const VOLUME_STEP = 100;

export function computeScore(input: CalculatorInput): number {
  return (
    (input.volume / 1000) *
    TYPE_WEIGHT[input.type] *
    FREQUENCY_WEIGHT[input.frequency]
  );
}

export function loadProfile(score: number): LoadProfile {
  if (score < 6) return "light";
  if (score < 30) return "medium";
  return "heavy";
}

export function recommend(input: CalculatorInput): {
  recommendation: Recommendation;
  profile: LoadProfile;
  score: number;
} {
  const score = computeScore(input);
  const profile = loadProfile(score);

  let recommendation: Recommendation;

  if (!input.gpu) {
    recommendation = "cpuOnly";
  } else if (input.mode === "dedicated") {
    recommendation = "dedicated";
  } else if (profile === "heavy" && input.frequency === "continuous") {
    recommendation = "dedicated";
  } else if (profile === "heavy" || input.frequency === "continuous") {
    recommendation = "hybrid";
  } else {
    recommendation = "sharedPool";
  }

  return { recommendation, profile, score };
}
