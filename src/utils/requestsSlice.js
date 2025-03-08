import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "requests",
  initialState: null,
  reducers: {
    addRequests: (state, action) => {
      return action.payload;
    },
    removeRequest: (state, action) => {
      const newArr = state.filter((e) => e._id !== action.payload);
      return newArr;
    },
    clearRequests: (state) => null,
  },
});

export const { addRequests, removeRequest, clearRequests } =
  requestSlice.actions;
export default requestSlice.reducer;
