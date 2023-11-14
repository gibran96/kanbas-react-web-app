import KanbasNavigation from "./KanbasNavigation";
import {Navigate, Route, Routes} from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./index.css";
import KanbasMobileNavigation from "./KanbasNavigation/KanbasMobileNavigation";
import {useEffect, useState} from "react";
import {Provider} from "react-redux";
import store from "./store";
import axios from "axios";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const API_BASE = process.env.REACT_APP_API_BASE;
  const COURSES_URL = `${API_BASE}/courses`;
  console.log(COURSES_URL);
  const [course, setCourse] = useState({
    objId: courses.length + 1,
    _id: "Enter course ID",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    term: "202410_2 Fall 2023 Semester Full Term"
  });
  const resetCourse = () => {
    setCourse({
      _id: "",
      name: "",
      number: "",
      startDate: "",
      endDate: "",
      term: ""
    });
  }
  const findAllCourses = async () => {
    const response = await axios.get(COURSES_URL);
    setCourses(response.data);
  }
  const addNewCourse = async () => {
    const response = await axios.post(COURSES_URL, course);
    setCourses([
      ...courses,
      response.data
    ]);
    resetCourse();
  };
  const deleteCourse = async (id) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      const response = await axios.delete(`${COURSES_URL}/${id}`);
      if (response.status === 204) {
        setCourses(courses.filter((course) => course._id !== id));
      } else {
        alert("Unable to delete course");
      }
    }
  }
  const updateCourse = async () => {
    if (window.confirm("Are you sure you want to update this course?")) {
      const response = await axios.put(`${COURSES_URL}/${course._id}`, course);
      if (response.status === 204) {
        setCourses(courses.map((c) => c.objId === course.objId ? course : c));
      } else {
        alert("Unable to update course");
      }
      resetCourse();
    }
  }
  useEffect(() => {
    findAllCourses();
  }, []);
  return (
      <Provider store={store}>
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
                     element={<Courses/>}/>
              <Route path="Calendar" element={<h1>Calendar</h1>}/>
            </Routes>
          </div>
        </div>
      </Provider>
  );
}

export default Kanbas