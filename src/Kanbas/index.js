import KanbasNavigation from "./KanbasNavigation";
import {Navigate, Route, Routes} from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./index.css";

function Kanbas() {
  return (
      <div className={'row px-0 mx-0'}>
        <div className={'col-md-1 d-none d-md-block px-0'}>
          <KanbasNavigation/>
        </div>
        <div className={'col-12 col-md-11'}>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard"/>}/>
            <Route path="Account" element={<Account/>}/>
            <Route path="Dashboard" element={<Dashboard/>}/>
            <Route path="Courses/:courseId/*" element={<Courses/>}/>
            <Route path="Calendar" element={<h1>Calendar</h1>}/>
          </Routes>
        </div>
      </div>
  );
}

export default Kanbas