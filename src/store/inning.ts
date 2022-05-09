import { createSlice } from "@reduxjs/toolkit";

export interface InningState {
  inning: number;
  top: boolean;
}

const initialState: InningState = {
  inning: 1,
  top: true,
};

export const inningSlice = createSlice({
  name: "inning",
  initialState,
  reducers: {
    switchSides: (state) => {
      if (state.top) {
        state.top = false;
      } else {
        state.top = true;
        state.inning += 1;
      }
    },
    newGame: (state) => {
      state.top = true;
      state.inning = 1;
    },
  },
});

export const { switchSides } = inningSlice.actions;

export default inningSlice.reducer;
