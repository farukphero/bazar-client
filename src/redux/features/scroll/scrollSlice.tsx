import { createSlice } from "@reduxjs/toolkit";

export interface SliceState {
    isScrollTop: boolean;
}

const initialState :SliceState = {
  isScrollTop: false,
};

export const scrollSlice = createSlice({
  name: "scroll",
  initialState,
  reducers: {
    scrollTop: (state) => {
      state.isScrollTop = true;
    },
    scrollBottom: (state) => {
      state.isScrollTop = false;
    },
  },
});


export const { scrollTop, scrollBottom } = scrollSlice.actions;

export default scrollSlice.reducer;
