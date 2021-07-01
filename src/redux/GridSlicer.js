import { createSlice } from "@reduxjs/toolkit";

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

// to initilize a grid
export function initGrid(nbRs, nbCs) {
  // init a grid full of 0
  const grid = [];

  for (let i = 0; i < nbRs; i++) {
    const row = [];

    for (let j = 0; j < nbCs; j++) {
      row.push(0);
    }

    grid.push(row);
  }

  return grid;
}
