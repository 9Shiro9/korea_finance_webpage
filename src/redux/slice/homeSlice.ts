import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  largeScreen: boolean;
}

const initialState: IInitialState = {
  largeScreen: false,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setScreen: (state, { payload }) => {
      state.largeScreen = payload;
    },
  },
});

export const { setScreen } = homeSlice.actions;

export default homeSlice.reducer;

export const selectScreen = (state: { home: IInitialState }) =>
  state.home.largeScreen;
