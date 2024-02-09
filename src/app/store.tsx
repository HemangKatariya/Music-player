import { configureStore } from "@reduxjs/toolkit";
import musicReducer from "../app/features/music/musicSlice";

export default configureStore({
  reducer: {
    counter: musicReducer,
  },
});
