import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  showTask: false,
};

const UI = createSlice({
  name: "UiToggle",
  initialState,
  reducers: {
    toggleOnOff: (state) => {
      state.show = !state.show;
    },
    toggleCompletedTask: (state) => {
      state.showTask = !state.showTask;
    },
  },
});

export default UI.reducer;
export const { toggleOnOff, toggleCompletedTask } = UI.actions;
