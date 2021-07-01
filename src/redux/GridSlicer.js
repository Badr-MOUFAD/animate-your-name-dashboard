import { createSlice } from "@reduxjs/toolkit";
import { initGrid } from "../jsScripts/gridFunctions";

const initialState = {
  gridDimension: [2, 2],
  grid: initGrid(2, 2),
  penMode: 1
};

export const gridSlice = createSlice({
  name: "grid",
  initialState: initialState,
  reducers: {
    changeGridDimension: (state, action) => {
      const newGridDimension = action.payload;

      state.gridDimension = newGridDimension;
      state.grid = initGrid(...newGridDimension);
    },
    changeValueCell: (state, action) => {
      const { loc, val } = action.payload;

      state.grid[loc[0]][loc[1]] = val;
    },
    changePenMode: (state, action) => {
      state.penMode = action.payload;
    }
  }
});

export const gridSlectors = {
  grid: (state) => state.grid.grid,
  penMode: (state) => state.grid.penMode
};

export const {
  changeGridDimension,
  changeValueCell,
  changePenMode
} = gridSlice.actions;

export default gridSlice.reducer;
