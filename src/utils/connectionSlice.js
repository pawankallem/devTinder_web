import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "connections",
  initialState: null,
  reducers: {
    addConnections: (state, action) => {
      return action.payload;
    },
    removeConnections: (state, action) => {
      return null;
    },
    clearConnections: (state) => null,
  },
});

export const { addConnections, removeConnections, clearConnections } =
  connectionSlice.actions;
export default connectionSlice.reducer;
