import {Link, useLocation, useParams} from "react-router-dom";
import "./index.css";

function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments",
    "Quizzes", "Grades", "People", "Panopto Video", "Discussions",
    "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations",
    "Syllabus", "Settings"];
  const {courseId} = useParams();
  const {pathname} = useLocation();
  return (
      <div className="wd-course-navigation list-group">
        {links.map((link, index) => (
            <Link
                key={index}
                to={`/Kanbas/Courses/${courseId}/${link}`}
                className={`list-group-item list-group-item-action ${pathname.includes(
                    link) && "active"}`}
            >
              {link}
            </Link>
        ))}
      </div>
  );
}

export default CourseNavigation;
