import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    search: "",
    userinfo: null,
    pending: false,
    error: false,
  },
  reducers: {
    updateSearch: (state, action) => {
      state.search = action.payload;
    },
    updateStart: (state) => {
      state.pending = true;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.userinfo = action.payload;
      state.error = false;
    },
    error: (state) => {
      state.error = true;
      state.pending = false;
    },

    logout: (state) => {
      state.pending = false;
      state.userinfo = null;
    },
  },
});

export const { updateStart, updateSuccess, error, logout,updateSearch } = userSlice.actions;
export default userSlice.reducer;
