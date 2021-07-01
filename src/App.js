import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import GridDimensionComponents from "./components/GridDimension";
import GridComponent from "./components/Grid";
import PenComponent from "./components/Pen";
import ExportGridComponent from "./components/ExportGrid";

export default function App() {
  return (
    <div className="p-3">
      <div className="row">
        {/* side bar */}
        <div className="col-12 col-sm-4 col-md-3 col-lg-2 mx-3 border rounded p-3">
          <GridDimensionComponents />
          <PenComponent />
          <ExportGridComponent />
        </div>

        {/* content */}
        <div className="col-12 col-sm-7 col-md-8 col-lg-9 mx-3 mx-sm-1 mt-3 mt-sm-0 border rounded p-3">
          <GridComponent />
        </div>
      </div>
    </div>
  );
}
