import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../BASEurl";

export const getMovie = createAsyncThunk("movie/getMovies", async () => {
  return fetch(`${BASE_URL}/api/movies`).then((res) => res.json());
});
export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: null,
    loading: false,
    error: false,
  },
  extraReducers: {
    [getMovie.pending]: (state, action) => {
      state.loading = true;
    },
    [getMovie.fulfilled]: (state, action) => {
      state.loading = false;
      state.movies = action.payload;
    },
    [getMovie.rejected]: (state, action) => {
      state.error = true;
    },
  },
});

export default movieSlice.reducer;
