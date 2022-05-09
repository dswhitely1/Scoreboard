import { Batter } from "../components/Batter";
import { Grid } from "@mui/material";
import { useAppSelector } from "../hooks/reduxHooks";
import { AddBatter } from "../components/AddBatter";

export function AtBat() {
  const { currentBatter } = useAppSelector((state) => state.batter);
  return (
    <Grid container>
      {/* <Grid item sm={6} sx={{ flexGrow: 1, width: "100%" }}>
        <Pitcher />
      </Grid> */}
      <Grid item sm={6} sx={{ flexGrow: 1, width: "100%" }}>
        {currentBatter ? <Batter batter={currentBatter} /> : <AddBatter />}
      </Grid>
    </Grid>
  );
}
