import Assignment3 from "./a3";
import {Link, Navigate, Route, Routes, useLocation} from "react-router-dom";
import Assignment4 from "./a4";
import Assignment5 from "./a5";

function Labs() {
  const {pathname} = useLocation();
  return (
      <div className={'px-5 py-3'}>
        <div className="row">
          <div className="col-8">
            <h1>Labs</h1>
          </div>
          <div className="col-4 align-self-center position-fixed end-0 pe-5">
            <div className="float-end">
              <Link to="/" className="btn btn-secondary">Back</Link>
            </div>
          </div>
        </div>
        <div className="nav nav-pills">
          <Link
              to="/Labs/a3"
              className={`nav-link ${pathname.includes("a3") ? "active" : ""}`}
          >
            Assignment 3
          </Link>
          <Link
              to="/Labs/a4"
              className={`nav-link ${pathname.includes("a4") ? "active" : ""}`}
          >
            Assignment 4
          </Link>
          <Link
              to="/Labs/a5"
              className={`nav-link ${pathname.includes("a5") ? "active" : ""}`}
          >
            Assignment 5
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="a3"/>}/>
          <Route path="a3/*" element={<Assignment3/>}/>
          <Route path="a4" element={<Assignment4/>}/>
          <Route path="a5" element={<Assignment5/>}/>
        </Routes>
      </div>
  );
}

export default Labs;