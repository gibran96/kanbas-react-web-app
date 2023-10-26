import KanbasNavigation from "./KanbasNavigation";
import {Navigate, Route, Routes} from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./index.css";
import KanbasMobileNavigation from "./KanbasNavigation/KanbasMobileNavigation";
import {useState} from "react";
import db from "./Database";

function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    objId: courses.length + 1,
    _id: "Enter course ID",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    term: "202410_2 Fall 2023 Semester Full Term"
  });
  const addNewCourse = () => {
    setCourses([...courses, course]);
  };
  const deleteCourse = (id) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      setCourses(courses.filter((course) => course._id !== id));
    }
  }
  const updateCourse = () => {
    if (window.confirm("Are you sure you want to update this course?")) {
      setCourses(courses.map((c) => c.objId === course.objId ? course : c));
    }
  }
  return (
      <div className={'row px-0 mx-0'}>
        <div className={'col-md-1 d-none d-md-block px-0'}>
          <KanbasNavigation/>
        </div>
        <div className="col-12 d-md-none px-0">
          <KanbasMobileNavigation/>
        </div>
        <div className={'col-12 col-md-11 py-3'}>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard"/>}/>
            <Route path="Account" element={<Account/>}/>
            <Route path="Dashboard"
                   element={<Dashboard course={course} courses={courses}
                                       addNewCourse={addNewCourse}
                                       deleteCourse={deleteCourse}
                                       setCourse={setCourse}
                                       updateCourse={updateCourse}/>}/>
            <Route path="Courses/:courseId/*"
                   element={<Courses courses={courses}/>}/>
            <Route path="Calendar" element={<h1>Calendar</h1>}/>
          </Routes>
        </div>
      </div>
  );
}

export default Kanbas