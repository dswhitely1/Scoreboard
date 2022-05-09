import { createSlice } from "@reduxjs/toolkit";

export interface Roster {
  firstName?: string;
  lastName?: string;
  jersey: number;
}

export interface RosterState {
  roster: Roster[];
  coach: string;
  battingOrder: Roster["jersey"][];
}

const initialState: RosterState = {
  roster: [],
  coach: "",
  battingOrder: [],
};

export const rosterSlice = createSlice({
  name: "roster",
  initialState,
  reducers: {},
});

export default rosterSlice.reducer;
