import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useAppDispatch } from "../hooks/reduxHooks";
import * as batterActions from "../store/batter";
import * as basesActions from "../store/bases";

export function AddBatter() {
  const [jerseyNumber, setJerseyNumber] = useState<string>("");
  const dispatch = useAppDispatch();
  function addBatter() {
    dispatch(batterActions.newBatter(jerseyNumber));
    dispatch(basesActions.newBatter(jerseyNumber));
  }
  return (
    <Card>
      <CardHeader title="Add Batter" subheader="Add Jersey Number" />
      <CardContent>
        <TextField
          id="jerseyNumber"
          name="jerseyNumber"
          value={jerseyNumber}
          type="number"
          onChange={(e) => setJerseyNumber(e.target.value)}
        />
      </CardContent>
      <CardActions>
        <Button variant="text" onClick={addBatter}>
          Add Batter
        </Button>
      </CardActions>
    </Card>
  );
}
