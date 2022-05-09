import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BatterState {
  currentBatter?: string;
  balls: number;
  strikes: number;
  pitch: number;
  outs: number;
}

const initialState: BatterState = {
  balls: 0,
  strikes: 0,
  pitch: 0,
  outs: 0,
};

export const batterSlice = createSlice({
  name: "batter",
  initialState,
  reducers: {
    ball: (state) => {
      if (state.balls === 3) {
        // Walk Batter
        state.balls = 0;
        state.strikes = 0;
        state.pitch = 0;
      } else {
        state.balls += 1;
        state.pitch += 1;
      }
    },
    strike: (state) => {
      state.strikes += 1;
      state.pitch += 1;
    },
    foul: (state) => {
      if (state.strikes < 2) {
        state.strikes += 1;
      }
      state.pitch += 1;
    },
    out: (state) => {
      state.outs += 1;
      state.balls = 0;
      state.strikes = 0;
      state.pitch = 0;
      state.currentBatter = undefined;
    },
    batterAtBase: (state) => {
      state.balls = 0;
      state.strikes = 0;
      state.pitch = 0;
      state.currentBatter = undefined;
    },
    baseRunnerOut: (state) => {
      state.outs += 1;
    },
    newBatter: (state, action: PayloadAction<string>) => {
      state.currentBatter = action.payload;
    },
    endInning: (state) => {
      state.currentBatter = undefined;
      state.balls = 0;
      state.strikes = 0;
      state.pitch = 0;
      state.outs = 0;
    },
  },
});

export const {
  ball,
  strike,
  foul,
  newBatter,
  endInning,
  out,
  batterAtBase,
  baseRunnerOut,
} = batterSlice.actions;

export default batterSlice.reducer;
