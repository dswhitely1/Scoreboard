import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Card,
  CardContent,
  CardActions,
  CardHeader,
  ButtonGroup,
} from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { Bases, BaseState, batterOut, advanceRunner } from "../store/bases";
import { baseRunnerOut } from "../store/batter";
import { homeScored, guestScored } from "../store/score";

export function Base({ base }: { base: BaseState }) {
  const steps = ["At Bat", "First", "Second", "Third", "Home"];
  const { top, inning } = useAppSelector((state) => state.inning);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (base.currentBase === Bases.Home) {
      if (top) {
        dispatch(guestScored(inning - 1));
      } else {
        dispatch(homeScored(inning - 1));
      }
      dispatch(batterOut(base.playerNumber));
    }
  }, [base.currentBase]);

  return (
    <Card sx={{ width: "100%", mt: 1 }}>
      <CardHeader title={base.playerNumber} sx={{ textAlign: "center" }} />
      <CardContent>
        <Stepper activeStep={base.currentBase} alternativeLabel>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: { optional?: React.ReactNode; error?: boolean } =
              {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <ButtonGroup variant="text">
          <Button
            disabled={base.currentBase < 2}
            onClick={() =>
              dispatch(
                advanceRunner({
                  playerNumber: base.playerNumber,
                  newBase: base.currentBase - 1,
                })
              )
            }
          >
            Undo
          </Button>
          <Button
            disabled={base.currentBase === 0}
            onClick={() =>
              dispatch(
                advanceRunner({
                  playerNumber: base.playerNumber,
                  newBase: base.currentBase + 1,
                })
              )
            }
          >
            Advance
          </Button>
          <Button
            disabled={base.currentBase === 0}
            onClick={() => {
              dispatch(baseRunnerOut());
              dispatch(batterOut(base.playerNumber));
            }}
          >
            Out
          </Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}
