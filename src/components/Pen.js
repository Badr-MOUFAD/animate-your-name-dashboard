import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { changePenMode } from "../redux/GridSlicer";

export default function PenComponent(props) {
  const [penSelected, setPenSlected] = useState(true);
  const [eraserSelected, setEraserSlected] = useState(false);

  const dispatch = useDispatch();

  return (
    <div className="row mt-4">
      <h5 className="mb-4">Pen settings</h5>

      <RadioItem
        label="Write"
        radioName="test"
        checked={penSelected}
        onChangeHandler={({ target }) => {
          setPenSlected(target.checked);
          setEraserSlected(!target.checked);

          dispatch(changePenMode(1));
        }}
      />
      <RadioItem
        label="Erase"
        radioName="test"
        checked={eraserSelected}
        onChangeHandler={({ target }) => {
          setPenSlected(!target.checked);
          setEraserSlected(target.checked);

          dispatch(changePenMode(0));
        }}
      />
    </div>
  );
}

export function RadioItem(props) {
  const { label, radioName, checked, onChangeHandler } = props;

  return (
    <div className="form-check">
      <input
        className="form-check-input m-1"
        type="radio"
        name={radioName}
        id={"radio" + label}
        checked={checked}
        onChange={onChangeHandler}
      />
      <label className="form-check-label" for="exampleRadios1">
        {label}
      </label>
    </div>
  );
}

export function RadioComponent(props) {
  const { radioName, id, checked, label, icon } = props;

  return (
    <div className="col-3 col-sm-5 ">
      <input
        type="radio"
        className="btn-check"
        name="options-outlined"
        id="success-outlined"
        autocomplete="off"
        checked
      />
      <label
        class="btn btn-outline-success"
        style={{ width: "70px" }}
        for="success-outlined"
      >
        Pen
      </label>
    </div>
  );
}
