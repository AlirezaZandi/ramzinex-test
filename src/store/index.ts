import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import marketsReducer from "./slices/markets";

const store = configureStore({
  reducer: {
    markets: marketsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
