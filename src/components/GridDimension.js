import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { changeGridDimension } from "../redux/GridSlicer";

export default function GridSettingsComponent(props) {
  // to hold state of inputs
  const [nbRows, setNbRows] = useState("");
  const [nbCols, setNbCols] = useState("");

  // to apply changes
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <h5 className="">Grid Dimension</h5>

      <LabeledInput
        label="Nb rows"
        value={nbRows}
        handler={(e) => setNbRows(e.target.value)}
      />
      <LabeledInput
        label="Nb cols"
        value={nbCols}
        handler={(e) => setNbCols(e.target.value)}
      />

      <div className="">
        <button
          type="button"
          class="col btn btn-primary"
          onClick={() => {
            dispatch(changeGridDimension([+nbRows, +nbCols]));
          }}
        >
          Apply changes
        </button>
      </div>
    </React.Fragment>
  );
}

export function LabeledInput(props) {
  const { label, value, handler } = props;

  return (
    <div className="row align-items-center my-4">
      <div className="col-5">
        <label id={`${label}-input`} className="col-form-label">
          {label}
        </label>
      </div>
      <div className="col">
        <input
          type="text"
          id={`${label}-input`}
          className="form-control"
          value={value}
          onChange={handler}
        />
      </div>
    </div>
  );
}
