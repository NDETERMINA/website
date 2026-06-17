export type HeroSignal =
  | "simulate"
  | "observe"
  | "world"
  | "rank"
  | "retrieve"
  | "act"
  | "policy"
  | "ship"
  | "review"
  | "block"
  | "decide"
  | "evidence"
  | "memory";

export type HeroSignalHandler = (signal: HeroSignal | null) => void;
