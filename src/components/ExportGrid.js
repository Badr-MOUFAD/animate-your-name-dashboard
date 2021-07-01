import React, { useState } from "react";

import { useSelector } from "react-redux";
import { gridSlectors } from "../redux/GridSlicer";

export default function PenComponent(props) {
  const [exportGrid, setExportedGrid] = useState("");
  const grid = useSelector(gridSlectors.grid);

  return (
    <div className="row mt-4">
      <h5 className="mb-4">Export grid</h5>

      <div className="col">
        <input
          type="text"
          id={"export-input"}
          className="form-control"
          value={exportGrid}
        />
      </div>

      <div className="col-5">
        <label
          id={"export-input-label"}
          className="btn btn-primary col-form-label"
          onClick={() => setExportedGrid(gridToString(grid))}
        >
          Export
        </label>
      </div>

      <div className="col- mt-2">
        <button
          className="btn btn-sm btn-light"
          onClick={() => {
            let copyText = document.getElementById("export-input");
            copyText.select();
            document.execCommand("copy");
          }}
        >
          Copy grid
        </button>
      </div>
    </div>
  );
}

export function gridToString(arr) {
  const [n, m] = [arr.length, arr[0].length];

  let stringArr = "[\n";

  for (let i = 0; i < n; i++) {
    let rowString = "[";

    for (let j = 0; j < m - 1; j++) {
      rowString += `${String(arr[i][j])}, `;
    }

    rowString += `${arr[i][m - 1]}]\n`;

    stringArr += rowString + ",";
  }

  stringArr += "]";

  return stringArr;
}
