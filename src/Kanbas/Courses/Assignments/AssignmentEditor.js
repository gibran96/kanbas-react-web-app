import {Link, useNavigate, useParams} from "react-router-dom";
import db from "../../Database";

function AssignmentEditor() {
  const {assignmentId} = useParams();
  const assignment = db.assignments.find(
      (assignment) => assignment._id === assignmentId);

  const {courseId} = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
      <div className="row pe-5">
        <h4>Assignment Name</h4>
        <input value={assignment.title}
               className="form-control mb-2"/>
        <div className="col pe-0">
          <div className="float-end">
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                  className="btn btn-secondary me-2">
              Cancel
            </Link>
            <button onClick={handleSave} className="btn btn-danger">
              Save
            </button>
          </div>
        </div>
      </div>
  );
}

export default AssignmentEditor;