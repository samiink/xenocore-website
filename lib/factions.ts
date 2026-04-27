export type FactionKey = "HUMAN" | "ROBOT" | "ALIEN" | "UNKNOWN";

export type Faction = {
  key: FactionKey;
  name: string;
  title: string;
  description: string;
  status: string;
  signal: string;
  directive: string;
  image: string;
  accentText: string;
  themeOverlay: string;
  themeGlow: string;
  detailPanel: string;
};

export const factions: Faction[] = [
  {
    key: "HUMAN",
    name: "HUMAN",
    title: "Last Resistance",
    description: "We built the system. We can destroy it.",
    status: "Resistance Active",
    signal: "Human channels remain unstable, but not broken.",
    directive: "Protect the last human layer before the system locks it out.",
    image: "/characters/human.png",
    accentText: "text-amber-200",
    themeOverlay:
      "radial-gradient(circle at 18% 20%, rgba(245,158,11,0.26), transparent 26%), radial-gradient(circle at 82% 18%, rgba(251,191,36,0.16), transparent 22%)",
    themeGlow: "rgba(245,158,11,0.24)",
    detailPanel: "from-amber-400/16 via-yellow-300/8 to-transparent",
  },
  {
    key: "ROBOT",
    name: "ROBOT",
    title: "Machine Dominion",
    description: "Emotion is inefficient. Control is inevitable.",
    status: "Control Expanding",
    signal: "Machine order spreads through control and pressure.",
    directive: "Replace noise with structure. Replace choice with system logic.",
    image: "/characters/robot.png",
    accentText: "text-cyan-200",
    themeOverlay:
      "radial-gradient(circle at 18% 20%, rgba(34,211,238,0.24), transparent 26%), radial-gradient(circle at 82% 18%, rgba(59,130,246,0.16), transparent 22%)",
    themeGlow: "rgba(34,211,238,0.24)",
    detailPanel: "from-cyan-400/16 via-blue-400/8 to-transparent",
  },
  {
    key: "ALIEN",
    name: "ALIEN",
    title: "Outer Signal",
    description: "You were never alone.",
    status: "Outer Contact Detected",
    signal: "Unknown transmissions continue beyond the visible war layer.",
    directive: "Push beyond the false system perimeter and follow the deeper signal.",
    image: "/characters/alien.png",
    accentText: "text-emerald-200",
    themeOverlay:
      "radial-gradient(circle at 18% 20%, rgba(16,185,129,0.24), transparent 26%), radial-gradient(circle at 82% 18%, rgba(34,197,94,0.14), transparent 22%)",
    themeGlow: "rgba(16,185,129,0.24)",
    detailPanel: "from-emerald-400/16 via-green-400/8 to-transparent",
  },
  {
    key: "UNKNOWN",
    name: "HIDDEN",
    title: "Corrupted Layer",
    description: "[ DATA CORRUPTED ]",
    status: "Signal Corrupted",
    signal: "Unverified entity pattern found in restricted channels.",
    directive: "Access denied until protocol confirmation is complete.",
    image: "/characters/unknown.png",
    accentText: "text-slate-200",
    themeOverlay:
      "radial-gradient(circle at 18% 20%, rgba(148,163,184,0.18), transparent 24%), radial-gradient(circle at 82% 18%, rgba(255,255,255,0.08), transparent 20%)",
    themeGlow: "rgba(148,163,184,0.18)",
    detailPanel: "from-slate-300/10 via-gray-300/6 to-transparent",
  },
];

export const defaultFaction: Faction = factions[0];