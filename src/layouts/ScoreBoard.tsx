import { CssBaseline, Box, Typography, Divider } from "@mui/material";
import { useState } from "react";
import { InfoRow } from "../views/InfoRow";
import { ScoreRow } from "../views/ScoreRow";

export function ScoreBoard() {
  const [balls, setBalls] = useState<number>(() => 0);
  const [strikes, setStrikes] = useState<number>(() => 0);
  const [outs, setOuts] = useState<number>(() => 0);
  const [home, setHome] = useState<number>(() => 0);
  const [guest, setGuest] = useState<number>(() => 0);
  const [inning, setInning] = useState<number>(() => 1);

  return (
    <>
      <CssBaseline />
      <Typography variant="h2" component="h1" textAlign="center">
        Score Board
      </Typography>
      <Box>
        <ScoreRow
          home={home}
          guest={guest}
          inning={inning}
          setHome={setHome}
          setGuest={setGuest}
          setInning={setInning}
        />
        <Divider
          sx={{
            margin: 8,
          }}
        />
        <InfoRow
          balls={balls}
          strikes={strikes}
          outs={outs}
          setBalls={setBalls}
          setOuts={setOuts}
          setStrikes={setStrikes}
        />
      </Box>
    </>
  );
}
