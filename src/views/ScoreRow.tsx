import { Grid } from "@mui/material";
import { TopRowComponent } from "../components/TopRowComponent";
import React from "react";

interface ScoreRowProps {
  home: number;
  inning: number;
  guest: number;
  setHome: React.Dispatch<React.SetStateAction<number>>;
  setInning: React.Dispatch<React.SetStateAction<number>>;
  setGuest: React.Dispatch<React.SetStateAction<number>>;
}

export function ScoreRow({
  home,
  inning,
  guest,
  setHome,
  setGuest,
  setInning,
}: ScoreRowProps) {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <TopRowComponent displayName="Home" count={home} setCount={setHome} />
      <TopRowComponent
        displayName="Inning"
        count={inning}
        setCount={setInning}
      />
      <TopRowComponent displayName="Guest" count={guest} setCount={setGuest} />
    </Grid>
  );
}
