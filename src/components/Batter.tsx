import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardHeader,
} from "@mui/material";
import { ball, strike, foul, out, batterAtBase } from "../store/batter";
import { batterOut, advanceRunner, Bases } from "../store/bases";
import { useAppDispatch } from "../hooks/reduxHooks";

export function Batter({ batter }: { batter: string }) {
  const dispatch = useAppDispatch();

  function outAtBat() {
    dispatch(batterOut(batter));
    dispatch(out());
  }

  function onBase() {
    dispatch(advanceRunner({ playerNumber: batter, newBase: Bases.First }));
    dispatch(batterAtBase());
  }

  return (
    <Card sx={{ mt: 1 }}>
      <CardHeader title={`Batter: #${batter}`} />
      <CardActions>
        <ButtonGroup variant="text">
          <Button onClick={() => dispatch(ball())}>Ball</Button>
          <Button onClick={() => dispatch(strike())}>Strike</Button>
          <Button onClick={() => dispatch(foul())}>Foul</Button>
          <Button onClick={outAtBat}>Out</Button>
          <Button onClick={onBase}>Hit</Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}
