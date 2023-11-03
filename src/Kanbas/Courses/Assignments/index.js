import {AiFillDelete, AiOutlinePlus} from "react-icons/ai";
import {
  BsCheckCircle,
  BsFillFileTextFill,
  BsThreeDotsVertical
} from "react-icons/bs";
import "./index.css"
import {Link, useNavigate, useParams} from "react-router-dom";
import {RxDragHandleDots2} from "react-icons/rx";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteAssignment} from "./assignmentsReducer";

function Assignments() {
  const {courseId} = useParams();
  const dispatch = useDispatch();
  let assignments = useSelector(
      state => state.assignmentsReducer.assignments);
  assignments = assignments.filter(
      (assignment) => assignment.course === courseId);
  const navigate = useNavigate();

  const navigateToAdd = () => {
    navigate(`/Kanbas/Courses/${courseId}/AddAssignment`);
  }

  const deleteAss = (assignmentId) => {
    if (window.confirm('Are you sure you want to delete this assignment?')) {
      dispatch(deleteAssignment(assignmentId));
    }
  }

  return (
      <>
        <div className="row pe-5">
          <div className="col px-0">
            <div className="float-start">
              <input type="text" className="form-control" id="searchAssignment"
                     placeholder="Search for Assignments"/>
            </div>
            <div className="float-end">
              <button className="btn btn-light rounded-1 me-2"><AiOutlinePlus/>Group
              </button>
              <button className="btn btn-danger rounded-1 me-2"
                      onClick={navigateToAdd}>
                <AiOutlinePlus/> Assignment
              </button>
              <button className="btn btn-light rounded-1 h-100">
                <BsThreeDotsVertical/>
              </button>
            </div>
          </div>
          <div className="wd-horiz-line mt-3"></div>
          {(!assignments || assignments.length === 0) &&
              <div className="row">
                <div className="col">
                  <h1>No assignments found</h1>
                </div>
              </div>
          }
          {assignments && assignments.length > 0 && <ul
              className={"list-group rounded-1 mt-4"}>
            <li className={"list-group-item list-group-item-secondary"}>
              Assignments
              <div className="float-end">
                <span
                    className="border border-1 border-dark rounded-pill p-1 me-2">40% of total</span>
                <AiOutlinePlus className="me-2"/>
                <BsThreeDotsVertical/>
              </div>
            </li>
            {assignments.map((assignment, index) => (
                <li key={index}
                    className="list-group-item list-group-item-action">
                  <div className="row">
                    <div className="col-1 align-self-center">
                      <RxDragHandleDots2/>
                      <BsFillFileTextFill className="wd-color-green ms-4"/>
                    </div>
                    <div className="col-9 align-self-center">
                      <Link
                          key={assignment._id}
                          to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                        {assignment.title}
                      </Link>
                      {assignment.description && <p
                          className="wd-todo-subtext mb-0">{assignment.description}</p>}
                      {assignment.points && <span
                          className="wd-todo-subtext mb-0">Points: {assignment.points} |</span>}
                      {assignment.due && <span
                          className="wd-todo-subtext mb-0 ms-1">Due: {assignment.due} |</span>}
                      {assignment.availableFrom && <span
                          className="wd-todo-subtext mb-0 ms-1">Available from: {assignment.availableFrom} |</span>}
                      {assignment.availableTo && <span
                          className="wd-todo-subtext mb-0 ms-1">Available to: {assignment.availableTo}</span>}
                    </div>
                    <div className="col-2 align-self-center">
                      <div className="float-end">
                        <AiFillDelete
                            className={'wd-color-red wd-cursor-pointer'}
                            onClick={() => deleteAss(
                                assignment._id)}/>
                        <BsCheckCircle
                            className="wd-color-green align-self-center mx-3"/>
                        <BsThreeDotsVertical/>
                      </div>
                    </div>
                  </div>
                </li>
            ))}
          </ul>}
        </div>
      </>
  );
}

export default Assignments;