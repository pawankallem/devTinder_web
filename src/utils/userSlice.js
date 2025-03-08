import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state) => {
      state = null;
      // return null ALSO WORKS
    },
    clearUser: (state) => null,
  },
});

export const { addUser, removeUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
