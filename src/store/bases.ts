import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum Bases {
  "AtBat",
  "First",
  "Second",
  "Third",
  "Home",
}

export enum BatterStatus {
  "Active",
  "Out",
  "Completed",
}

export interface BaseState {
  playerNumber: string;
  currentBase: Bases;
  status: BatterStatus;
}

export interface BasesState {
  bases: BaseState[];
}

const initialState: BasesState = {
  bases: [],
};

export const basesSlice = createSlice({
  name: "bases",
  initialState,
  reducers: {
    newBatter: (state, action: PayloadAction<string>) => {
      const newBatter: BaseState = {
        playerNumber: action.payload,
        currentBase: Bases.AtBat,
        status: BatterStatus.Active,
      };
      state.bases.push(newBatter);
    },
    batterOut: (state, action: PayloadAction<string>) => {
      state.bases = state.bases.filter(
        (base) => base.playerNumber !== action.payload
      );
    },
    advanceRunner: (
      state,
      action: PayloadAction<{ playerNumber: string; newBase: Bases | number }>
    ) => {
      state.bases = state.bases.map((base) => {
        if (base.playerNumber === action.payload.playerNumber) {
          return {
            playerNumber: base.playerNumber,
            currentBase: action.payload.newBase,
            status: base.status,
          };
        }
        return base;
      });
    },
    switchSides: (state) => {
      state.bases = [];
    },
  },
});

export const { advanceRunner, batterOut, newBatter, switchSides } =
  basesSlice.actions;

export default basesSlice.reducer;
