import { createSlice } from "@reduxjs/toolkit";
import intialdata from "./intialdata.json";

const dataSlice = createSlice({
  name: "videoSlice",
  initialState: {
    data: intialdata,
    channel: [],
    toggle: {},
  },
  reducers: {
    getData: (state, action) => {
      state.data = action.payload;
    },
    Toggle: (state, action) => {
      state.toggle = action.payload;
    },
    cleanChannel: (state) => {
      state.channel = [];
    },

    getChannel: (state, { payload }) => {
      state.channel = [...state.channel, payload];
      state.channel = [...new Set(state.channel)];
    },
  },
});

export const { getData, getChannel, cleanChannel, Toggle } = dataSlice.actions;
export default dataSlice.reducer;
