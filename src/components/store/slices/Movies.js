import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../axiosConfig/instance.JS";

export  const MoviesAction = createAsyncThunk("getMovies", async () => {
  const res = await instance.get(`/movie/popular`);
  return res.data.results;
});

const MoviesSlice = createSlice({
  name: "movies",
  initialState: { movies: [] },
  extraReducers: (objbuilder) => {
    objbuilder.addCase(MoviesAction.pending,()=>{
    });
    objbuilder.addCase(MoviesAction.fulfilled,(state , action)=>{
        state.movies=action.payload;
    });
    objbuilder.addCase(MoviesAction.rejected,()=>{
    });
  },
});

export default MoviesSlice.reducer;
