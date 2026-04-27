"use client";

import { createContext, useContext, useMemo, useState } from "react";

export type FactionId = "obsidian" | "crimson" | "vortex" | "null";

export type Faction = {
  id: FactionId;
  name: string;
  label: string;
  primary: string;
  secondary: string;
};

const factions: Faction[] = [
  {
    id: "obsidian",
    name: "OBSIDIAN NODE",
    label:
      "Obsidian Node controls information flow through cold logic and silent surveillance.",
    primary: "#d4af37",
    secondary: "#f4d989",
  },
  {
    id: "crimson",
    name: "CRIMSON ORDER",
    label:
      "Crimson Order turns conflict into command, pressure, and absolute domination.",
    primary: "#ff3b3b",
    secondary: "#ff8a8a",
  },
  {
    id: "vortex",
    name: "VORTEX SYNDICATE",
    label:
      "Vortex Syndicate bends signals, corrupts patterns, and weaponizes chaos.",
    primary: "#8b5cf6",
    secondary: "#c4b5fd",
  },
  {
    id: "null",
    name: "NULL DIVISION",
    label:
      "Null Division exists outside the visible protocol. Unknown. Untracked. Unclaimed.",
    primary: "#d1d5db",
    secondary: "#f9fafb",
  },
];

type FactionThemeContextValue = {
  activeFaction: Faction;
  factions: Faction[];
  setFaction: (id: FactionId) => void;
};

const FactionThemeContext = createContext<FactionThemeContextValue | null>(null);

export function FactionThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeFactionId, setActiveFactionId] =
    useState<FactionId>("obsidian");

  const activeFaction =
    factions.find((faction) => faction.id === activeFactionId) ?? factions[0];

  const value = useMemo(
    () => ({
      activeFaction,
      factions,
      setFaction: setActiveFactionId,
    }),
    [activeFaction]
  );

  return (
    <FactionThemeContext.Provider value={value}>
      {children}
    </FactionThemeContext.Provider>
  );
}

export function useFactionTheme() {
  const context = useContext(FactionThemeContext);

  if (!context) {
    throw new Error(
      "useFactionTheme must be used inside FactionThemeProvider"
    );
  }

  return context;
}