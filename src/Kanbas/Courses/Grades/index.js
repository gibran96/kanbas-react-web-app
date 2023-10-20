import {useParams} from "react-router-dom";
import db from "../../Database";

function Grades() {
  const {courseId} = useParams();
  const assignments = db.assignments.filter(
      (assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter(
      (enrollment) => enrollment.course === courseId);
  return (
      <div className="pe-5">
        <div className="row">
          <div className="col-6">
            <label htmlFor="student-names" className="fw-bold mb-1">Student
              Names</label>
            <div className="input-group">
              <input id="student-names" type="text"
                     placeholder="Search Students"
                     className="form-control"/>
            </div>
          </div>
          <div className="col-6">
            <label htmlFor="assignment-names" className="fw-bold mb-1">Assignment
              Names</label>
            <div className="input-group">
              <input id="assignment-names" type="text"
                     placeholder="Search Assignments"
                     className="form-control"/>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <button className="btn btn-light">
              Apply Filters
            </button>
          </div>
        </div>
        <table
            className="table table-bordered table-striped table-responsive mt-3">
          <thead>
          <tr>
            <th scope="col" className="text-center align-middle">Student Name
            </th>
            {assignments.map((assignment) => (
                <th className="text-center align-middle">{assignment.title}</th>))}
          </tr>
          </thead>
          <tbody>
          {enrollments.map((enrollment) => {
            const user = db.users.find(
                (user) => user._id === enrollment.user);
            return (
                <tr>
                  <td className="text-center">{user.firstName} {user.lastName}</td>
                  {assignments.map((assignment, index) => {
                    const grade = db.grades.find(
                        (grade) => grade.student === enrollment.user
                            && grade.assignment === assignment._id);
                    return (
                        <td key={index} className="text-center">{grade?.grade || ""}</td>);
                  })}
                </tr>);
          })}
          </tbody>
        </table>
      </div>);
}

export default Grades;