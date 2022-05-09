import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ScoreState {
  home: number[];
  guest: number[];
}

const initialState: ScoreState = {
  home: [0],
  guest: [0],
};

export const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    homeScored: (state, action: PayloadAction<number>) => {
      state.home[action.payload] += 1;
    },
    guestScored: (state, action: PayloadAction<number>) => {
      state.guest[action.payload] += 1;
    },
    adjustHomeScore: (
      state,
      action: PayloadAction<{ inning: number; score: number }>
    ) => {
      state.home[action.payload.inning] = action.payload.score;
    },
    adjustGuestScore: (
      state,
      action: PayloadAction<{ inning: number; score: number }>
    ) => {
      state.guest[action.payload.inning] = action.payload.score;
    },
    newGame: (state) => {
      state.home = [0];
      state.guest = [0];
    },
    newInning: (state) => {
      state.home.push(0);
      state.guest.push(0);
    },
  },
});

export const {
  homeScored,
  guestScored,
  adjustGuestScore,
  adjustHomeScore,
  newGame,
  newInning,
} = scoreSlice.actions;

export default scoreSlice.reducer;
