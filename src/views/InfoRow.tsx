import { Info } from "../components/Info";
import React from "react";
import { Box } from "@mui/material";

interface InfoRowsProps {
  balls: number;
  strikes: number;
  outs: number;
}

export function InfoRow({ balls, strikes, outs }: InfoRowsProps) {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
      <Info displayName="Balls" count={balls} />
      <Info displayName="Strikes" count={strikes} />
      <Info displayName="Outs" count={outs} />
    </Box>
  );
}
