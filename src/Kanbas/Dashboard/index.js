import {Link} from "react-router-dom";
import "./index.css"
import {BsThreeDotsVertical} from "react-icons/bs";
import {IoNewspaperOutline} from "react-icons/io5";
import {AiFillEdit} from "react-icons/ai";
import {MdDeleteForever} from "react-icons/md";
import {useState} from "react";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse
}) {
  const [editIndex, setEditIndex] = useState(-1);
  const [addToggle, setAddToggle] = useState(false);
  return (
      <>
        <div className={'d-none d-md-block'}>
          <div className={'fs-1'}>Dashboard</div>
          <hr/>
        </div>
        <h2>Published Courses ({courses.length})</h2>
        <button className={'btn btn-success mb-3'}
                onClick={() => setAddToggle(true)}>Add New
          Course
        </button>
        {addToggle && <>
          <input value={course.name} className="form-control w-50"
                 placeholder={'Course Name'}
                 onChange={(e) => setCourse(
                     {...course, name: e.target.value})}/>
          <input value={course._id} className="form-control w-50 mt-2"
                 placeholder={'Course ID'}
                 onChange={(e) => setCourse(
                     {...course, _id: e.target.value})}/>
          <input value={course.number} className="form-control w-50 mt-2"
                 placeholder={'Course Number'}
                 onChange={(e) => setCourse(
                     {...course, number: e.target.value})}/>
          <input value={course.startDate} className="form-control w-50 mt-2"
                 type="date"
                 title={'Start Date'}
                 onChange={(e) => setCourse(
                     {...course, startDate: e.target.value})}/>
          <input value={course.endDate} className="form-control w-50 mt-2"
                 type="date"
                 title={'End Date'}
                 onChange={(e) => setCourse(
                     {...course, endDate: e.target.value})}/>
          <input value={course.term} className="form-control w-50 mt-2"
                 placeholder={'Term'}
                 onChange={(e) => setCourse(
                     {...course, term: e.target.value})}/>
          {editIndex === -1 && <button className="btn btn-success me-3 mt-2"
                                       onClick={addNewCourse}>Add
          </button>}
          {editIndex !== -1 && <button className="btn btn-primary me-3 mt-2"
                                       onClick={updateCourse}>Update
          </button>}
          <button className="btn btn-danger mt-2"
                  onClick={() => {
                    setAddToggle(false);
                    if (editIndex !== -1) {
                      setEditIndex(-1);
                      setCourse({
                        objId: "",
                        _id: "Enter course ID",
                        name: "New Course",
                        number: "New Number",
                        startDate: "2023-09-10",
                        endDate: "2023-12-15",
                        term: "202410_2 Fall 2023 Semester Full Term"
                      });
                    }
                  }}>Cancel
          </button>
        </>}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {courses.map((course, index) => (
              <div className="col-12 col-sm-6 col-lg-4 col-xl-3 pt-4"
                   key={course._id}>
                <div className="card wd-card-style">
                  <div className="wd-card-height wd-bg-color-green">
                    <BsThreeDotsVertical className="wd-color-white float-end"/>
                  </div>
                  <div className="card-body">
                    <Link
                        key={course._id}
                        to={`/Kanbas/Courses/${course._id}`}
                        className="text-decoration-none"
                    >
                      <p className="wd-card-heading wd-color-green wd-card-ellipsis mb-1">{course.name}</p>
                      <p className="wd-card-subheading-font wd-card-subheading-color wd-card-ellipsis mb-1">
                        {course._id}</p>
                      <p className="wd-card-subheading-small-font wd-card-subheading-color wd-card-ellipsis">
                        {course.term}</p>
                    </Link>
                    <IoNewspaperOutline/>
                    <AiFillEdit className={'wd-cursor-pointer mx-2'}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setCourse(course);
                                  setEditIndex(index);
                                  setAddToggle(true);
                                }}/>
                    <MdDeleteForever
                        className={'wd-cursor-pointer wd-color-red'}
                        onClick={(e) => {
                          e.preventDefault();
                          deleteCourse(course._id)
                        }}/>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </>
  );
}

export default Dashboard;