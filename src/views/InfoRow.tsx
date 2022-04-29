import { Grid } from "@mui/material";
import { BottomRowComponent } from "../components/BottomRowComponent";

interface InfoRowsProps {
  balls: number;
  strikes: number;
  outs: number;
  setBalls: React.Dispatch<React.SetStateAction<number>>;
  setStrikes: React.Dispatch<React.SetStateAction<number>>;
  setOuts: React.Dispatch<React.SetStateAction<number>>;
}

export function InfoRow({
  balls,
  strikes,
  outs,
  setBalls,
  setStrikes,
  setOuts,
}: InfoRowsProps) {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <BottomRowComponent
        displayName="Balls"
        count={balls}
        setCount={setBalls}
      />

      <BottomRowComponent
        displayName="Strikes"
        count={strikes}
        setCount={setStrikes}
      />

      <BottomRowComponent displayName="Outs" count={outs} setCount={setOuts} />
    </Grid>
  );
}
