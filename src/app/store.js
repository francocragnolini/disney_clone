import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movie/movieSlice";
import userSlice from "../features/user/userSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    movie: movieReducer,
    user: userSlice,
  },
});
