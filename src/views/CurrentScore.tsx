import { TeamScore } from "../components/TeamScore";
import { Inning } from "../components/Inning";
import { Box } from "@mui/material";

export function CurrentScore({
  home,
  guest,
  inning,
  top,
}: {
  home: number;
  guest: number;
  inning: number;
  top: boolean;
}) {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
      <TeamScore teamName="guest" score={guest} />
      <TeamScore teamName="home" score={home} />
      <Inning inning={inning} top={top} />
    </Box>
  );
}
