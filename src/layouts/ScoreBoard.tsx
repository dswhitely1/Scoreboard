import { CssBaseline, Divider, Typography } from "@mui/material";
import { InfoRow } from "../views/InfoRow";
import { CurrentScore } from "../views/CurrentScore";
import { Bases } from "../views/Bases";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { AtBat } from "../views/AtBat";
import * as batterActions from "../store/batter";
import * as inningActions from "../store/inning";
import * as scoreActions from "../store/score";
import * as basesActions from "../store/bases";
import { useEffect } from "react";

export function ScoreBoard() {
  const dispatch = useAppDispatch();
  const { inning, top } = useAppSelector((state) => state.inning);
  const { home, guest } = useAppSelector((state) => state.score);
  const { balls, strikes, outs, currentBatter } = useAppSelector(
    (state) => state.batter
  );

  useEffect(() => {
    if (outs === 3) {
      dispatch(batterActions.endInning());
      dispatch(inningActions.switchSides());
      dispatch(basesActions.switchSides());
    }
  }, [outs, dispatch]);

  useEffect(() => {
    if (strikes === 3) {
      if (currentBatter) {
        dispatch(basesActions.batterOut(currentBatter));
      }
      dispatch(batterActions.out());
    }
  }, [strikes, dispatch]);

  useEffect(() => {
    if (inning !== 1) {
      dispatch(scoreActions.newInning());
    }
  }, [inning, dispatch]);

  return (
    <>
      <CssBaseline />
      <Typography variant="h2" component="h1" textAlign="center">
        Score Board
      </Typography>
      <CurrentScore
        home={home.reduce((acc, cur) => (acc += cur), 0)}
        guest={guest.reduce((acc, cur) => (acc += cur), 0)}
        inning={inning}
        top={top}
      />
      <InfoRow balls={balls} strikes={strikes} outs={outs} />
      <Divider />
      <AtBat />
      <Bases />
    </>
  );
}
