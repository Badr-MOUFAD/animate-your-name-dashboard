import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { gridSlectors, changeValueCell } from "../redux/GridSlicer";

export default function GridComponent(props) {
  const grid = useSelector(gridSlectors.grid);
  // for mouse hold event
  const [isMouseHold, setIsMouseHold] = useState(false);

  return (
    <React.Fragment>
      <div
        className="row px-2"
        onMouseDown={() => setIsMouseHold(true)}
        onMouseUp={() => setIsMouseHold(false)}
      >
        {grid.map((row, index) => {
          return (
            <GridRow
              key={`grid-row-${index}`}
              row={row}
              rowIndex={index}
              isMouseHold={isMouseHold}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
}

export function GridRow(props) {
  const { row, rowIndex, isMouseHold } = props;

  return (
    <div className="row d-flex justify-content-center">
      {row.map((val, index) => {
        return (
          <Square
            key={`grid-cell-${rowIndex}-${index}`}
            i={rowIndex}
            j={index}
            value={val}
            isMouseHold={isMouseHold}
          />
        );
      })}
    </div>
  );
}

export function Square(props) {
  const [isHover, setIsHover] = useState("");
  const { i, j, value, isMouseHold } = props;

  const dispatch = useDispatch();
  const val = useSelector(gridSlectors.penMode);

  const dictStyles = {
    display: "flex",
    width: "25px",
    height: "25px",
    margin: "1px"
  };

  const bgColor = value === 1 ? "primary" : "";

  return (
    <div
      className={`border rounded ${isHover} bg-${bgColor}`}
      style={dictStyles}
      onMouseEnter={() => setIsHover("shadow-sm")}
      onMouseLeave={() => setIsHover("")}
      onMouseOver={() => {
        dispatch(
          changeValueCell({ loc: [i, j], val: isMouseHold ? val : value })
        );
      }}
      onMouseDown={() => {
        dispatch(changeValueCell({ loc: [i, j], val: val }));
      }}
    ></div>
  );
}
