import { configureStore } from "@reduxjs/toolkit";
import gridReducer from "./GridSlicer";

export default configureStore({
  reducer: {
    grid: gridReducer
  }
});
