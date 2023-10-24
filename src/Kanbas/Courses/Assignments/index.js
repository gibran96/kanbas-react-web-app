import db from "../../Database";
import {AiOutlinePlus} from "react-icons/ai";
import {
  BsCheckCircle,
  BsFillFileTextFill,
  BsThreeDotsVertical
} from "react-icons/bs";
import "./index.css"
import {Link, useParams} from "react-router-dom";
import {RxDragHandleDots2} from "react-icons/rx";
import React from "react";

function Assignments() {
  let assignments = db.assignments;
  const {courseId} = useParams();
  assignments = assignments.filter(
      (assignment) => assignment.course === courseId);

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
              <button className="btn btn-danger rounded-1 me-2">
                <AiOutlinePlus/> Assignment
              </button>
              <button className="btn btn-light rounded-1 h-100">
                <BsThreeDotsVertical/>
              </button>
            </div>
          </div>
          <div className="wd-horiz-line mt-3"></div>
          <ul className={"list-group rounded-1 mt-4"}>
            <li className={"list-group-item list-group-item-secondary"}>
              Assignments
              <div className="float-end">
                <span className="border border-1 border-dark rounded-pill p-1 me-2">40% of total</span>
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
                      <p className="wd-todo-subtext mb-0">{assignment.description}</p>
                      <p className="wd-todo-subtext mb-0">{assignment.due}</p>
                    </div>
                    <div className="col-2 align-self-center">
                      <div className="float-end">
                        <BsCheckCircle className="wd-color-green align-self-center mx-3"/>
                        <BsThreeDotsVertical/>
                      </div>
                    </div>
                  </div>
                </li>
            ))}
          </ul>
        </div>
      </>
  );
}

export default Assignments;