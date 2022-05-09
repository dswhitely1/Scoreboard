import { configureStore } from "@reduxjs/toolkit";
import inningReducer from "./inning";
import scoreReducer from "./score";
import batterReducer from "./batter";
import rosterReducer from "./roster";
import basesReducer from "./bases";

export const store = configureStore({
  reducer: {
    inning: inningReducer,
    score: scoreReducer,
    batter: batterReducer,
    roster: rosterReducer,
    bases: basesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
