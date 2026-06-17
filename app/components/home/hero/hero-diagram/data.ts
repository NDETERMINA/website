import { HeroSignal } from "./types";

export const worldItems = [
  { signal: "world", icon: "users", label: "Populations", y: 104 },
  { signal: "world", icon: "database", label: "Sources & data", y: 144 },
  { signal: "world", icon: "code", label: "Tools & APIs", y: 184 },
  { signal: "world", icon: "shield", label: "Policies & rules", y: 224 },
  { signal: "world", icon: "pulse", label: "System state", y: 264 },
  { signal: "world", icon: "calendar", label: "Events", y: 304 }
] as const satisfies ReadonlyArray<{
  signal: HeroSignal;
  icon: string;
  label: string;
  y: number;
}>;

export const evidenceRows = [
  {
    signal: "rank",
    icon: "chart",
    title: "Rank behavior",
    detail: "ordering & shifts",
    y: 112,
    filled: [3, 8, 13, 17],
    ghost: [0, 1, 2, 5, 7, 10, 12, 15]
  },
  {
    signal: "retrieve",
    icon: "search",
    title: "Retrieve context",
    detail: "sources & state",
    y: 198,
    filled: [4, 7, 12, 16],
    ghost: [0, 2, 3, 6, 9, 11, 14, 18]
  },
  {
    signal: "act",
    icon: "wrench",
    title: "Act & tools",
    detail: "actions & outcomes",
    y: 284,
    filled: [2, 6, 11, 15],
    ghost: [0, 1, 4, 5, 8, 10, 13, 17]
  },
  {
    signal: "policy",
    icon: "shield",
    title: "Policy & safety",
    detail: "checks & limits",
    y: 370,
    filled: [1, 5, 10, 14, 18],
    ghost: [0, 3, 4, 7, 9, 12, 16]
  }
] as const satisfies ReadonlyArray<{
  signal: HeroSignal;
  icon: string;
  title: string;
  detail: string;
  y: number;
  filled: readonly number[];
  ghost: readonly number[];
}>;

export const decisions = [
  { signal: "ship", icon: "check", title: "Ship", detail: "meets bar", y: 126 },
  { signal: "review", icon: "minus", title: "Review", detail: "needs attention", y: 252 },
  { signal: "block", icon: "x", title: "Block", detail: "fails boundary", y: 378 }
] as const satisfies ReadonlyArray<{
  signal: HeroSignal;
  icon: string;
  title: string;
  detail: string;
  y: number;
}>;
