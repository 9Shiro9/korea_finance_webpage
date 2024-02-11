import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./slice/homeSlice";

const store = configureStore({
  // import your reducers here
  reducer: {
    home: homeSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
