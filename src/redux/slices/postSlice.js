import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      dispatch(setPosts(res.data));
    } catch (error) {
        return rejectWithValue(error.message)
    }
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState: {
    allPosts: [],
    status: null,
    error: null,
  },
  reducers: {
    setPosts: (state, action) => {
      state.allPosts = action.payload;
    }
  },
  extraReducers: {
    [getPosts.fulfilled]: (state) => {
      state.status = "resolved";
    },
    [getPosts.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload
    },
  },
});

export const { setPosts } = postSlice.actions;
export default postSlice.reducer;
