import { createSlice } from "@reduxjs/toolkit";

const CountSlice = createSlice({
  name: "count",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value -= 1 },
  }
});

export const { increment, decrement } = CountSlice.actions;
export default CountSlice.reducer;
