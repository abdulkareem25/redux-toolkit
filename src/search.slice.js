import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    photos: [],
    loading: false,
    error: null,
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    setPhotos(state, action) {
      state.photos = action.payload;
      state.loading = false;
      state.query = "";
    },
    setLoading(state, action) {
      state.loading = true;
      state.photos = [];
      state.error = null;
    },
    setError(state, action) {
      state.error = action.payload;
      state.photos = [];
      state.loading = false;
      state.query = "";
    }
  }
});

export const {
  setQuery,
  setPhotos,
  setLoading,
  setError
} = searchSlice.actions;

export default searchSlice.reducer;