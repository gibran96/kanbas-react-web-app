import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
  addAssignment,
  resetNewAssignment,
  setAssignmentDescription,
  setAssignmentName,
  setAvailableFrom,
  setAvailableTo,
  setDueDate,
  setNewAssignment,
  setNewAssignmentCourse,
  setNewAssignmentId,
  setPoints
} from "./assignmentsReducer";
import {addAssignmentToDB, updateAssignmentToDB} from "./client";
import {useEffect, useState} from "react";

function AddEditAssignment() {
  const {courseId, assignmentId} = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isEdit, setIsEdit] = useState(false);

  const assignments = useSelector(
      state => state.assignmentsReducer.assignments);
  const newAssignment = useSelector(
      state => state.assignmentsReducer.newAssignment);

  useEffect(() => {
    checkNewAssignment();
  }, [assignmentId]);
  const checkNewAssignment = () => {
    if (assignmentId) {
      setIsEdit(true);
      dispatch(setNewAssignment(assignments.find(
          (a) => a._id === assignmentId && a.course === courseId)));
    } else {
      dispatch(setNewAssignmentId("A" + (assignments.length + 1)));
      dispatch(setNewAssignmentCourse(courseId));
    }
  }

  const setName = (e) => {
    dispatch(setAssignmentName(e.target.value));
  }

  const setDescription = (e) => {
    dispatch(setAssignmentDescription(e.target.value));
  }

  const setAssPoints = (e) => {
    dispatch(setPoints(e.target.value));
  }

  const setAssDueDate = (e) => {
    dispatch(setDueDate(e.target.value));
  }

  const setAssAvailableFrom = (e) => {
    dispatch(setAvailableFrom(e.target.value));
  }

  const setAssAvailableTo = (e) => {
    dispatch(setAvailableTo(e.target.value));
  }

  const add = () => {
    addAssignmentToDB(courseId,
        {
          ...newAssignment,
          _id: "A" + (assignments.length + 1).toString()
        }).then((resp) => {
      dispatch(addAssignment(resp));
    })
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  }

  const update = () => {
    updateAssignmentToDB(courseId, assignmentId, newAssignment).then((resp) => {
      if (resp.status === 204) {
        dispatch(resetNewAssignment());
      }
      navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    });
  }

  const cancel = () => {
    dispatch(resetNewAssignment());
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  }

  return (<div className="row pe-5">
    <div className={'col'}>
      {!isEdit && <h4>Add new assignment</h4>}
      {isEdit && <h4>Edit assignment</h4>}
      <div className={'row'}>
        <input placeholder={'Name'} value={newAssignment.title}
               onChange={(e) => setName(e)}
               className="form-control mb-2 w-50"/>
      </div>
      <div className={'row'}>
            <textarea placeholder={'Description'}
                      value={newAssignment.description}
                      onChange={(e) => setDescription(e)}
                      className="form-control mb-2"/>
      </div>
      <div className={'row'}>
        <input type={'number'} className={'form-control w-50'}
               placeholder={'Points'} value={newAssignment.points}
               onChange={(e) => setAssPoints(e)}
        />
      </div>
      <div className={'row'}>
        <div className={'col-8 col-md-6 px-0'}>
          <div className={'card mt-3'}>
            <div className="card-body">
              <p className="mb-1">
                <label className="fw-bold" htmlFor="due-date">Due</label>
              </p>
              <input type="date" className="d-block form-control w-50"
                     id="due-date"
                     onChange={(e) => setAssDueDate(e)}
                     value={newAssignment.due}/>

              <div className="row my-4">
                <div className="col-6">
                  <label className="fw-bold mb-1" htmlFor="from-date">Available
                    from</label>
                  <input type="date" className="form-control" id="from-date"
                         onChange={(e) => setAssAvailableFrom(e)}
                         value={newAssignment.availableFrom}/>
                </div>
                <div className="col-6">
                  <label className="fw-bold mb-1"
                         htmlFor="to-date">Until</label>
                  <input type="date" className="form-control" id="to-date"
                         onChange={(e) => setAssAvailableTo(e)}
                         value={newAssignment.availableTo}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={'row'}>
        <div className="col pe-0">
          <div className="float-end">
            <button className="btn btn-secondary me-2" onClick={cancel}>
              Cancel
            </button>
            {!isEdit && <button className="btn btn-danger" onClick={add}>
              Add
            </button>}
            {isEdit && <button className="btn btn-danger" onClick={update}>
              Update
            </button>}
          </div>
        </div>
      </div>
    </div>
  </div>)
}

export default AddEditAssignment;