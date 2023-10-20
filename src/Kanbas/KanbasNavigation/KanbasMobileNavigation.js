import {AiOutlineMenu} from "react-icons/ai";
import {useState} from "react";
import {Collapse} from "react-bootstrap";
import {BiUserCircle} from "react-icons/bi";
import {RiDashboard3Fill, RiLogoutBoxRLine} from "react-icons/ri";
import {FaBook, FaHistory, FaInbox} from "react-icons/fa";
import {BsFillCalendar2WeekFill} from "react-icons/bs";
import {SiYoutubestudio} from "react-icons/si";
import {FiHelpCircle} from "react-icons/fi";
import {Link, useLocation, useParams} from "react-router-dom";
import {RxCross2} from "react-icons/rx";

function KanbasMobileNavigation() {
  const [openKanbas, setOpenKanbas] = useState(false);
  const [openCourse, setOpenCourse] = useState(false);
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox",
    "History", "Studio", "Commons", "Help"];

  const courseLinks = ["Home", "Modules", "Piazza", "Zoom Meetings",
    "Assignments",
    "Quizzes", "Grades", "People", "Panopto Video", "Discussions",
    "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations",
    "Syllabus", "Settings"];

  const courseLinkToIcoNMap = {
    Home: <BiUserCircle className="wd-icon"/>,
    Modules: <RiDashboard3Fill className="wd-icon"/>,
    Piazza: <FaBook className="wd-icon"/>,
    ZoomMeetings: <BsFillCalendar2WeekFill className="wd-icon"/>,
    Assignments: <FaInbox className="wd-icon"/>,
    Quizzes: <FaHistory className="wd-icon"/>,
    Grades: <SiYoutubestudio className="wd-icon"/>,
    People: <RiLogoutBoxRLine className="wd-icon"/>,
    PanoptoVideo: <FiHelpCircle className="wd-icon"/>,
    Discussions: <FiHelpCircle className="wd-icon"/>,
    Announcements: <FiHelpCircle className="wd-icon"/>,
    Pages: <FiHelpCircle className="wd-icon"/>,
    Files: <FiHelpCircle className="wd-icon"/>,
    Rubrics: <FiHelpCircle className="wd-icon"/>,
    Outcomes: <FiHelpCircle className="wd-icon"/>,
    Collaborations: <FiHelpCircle className="wd-icon"/>,
    Syllabus: <FiHelpCircle className="wd-icon"/>,
    Settings: <FiHelpCircle className="wd-icon"/>,
  }

  const linkToIconMap = {
    Account: <BiUserCircle className="wd-icon"/>,
    Dashboard: <RiDashboard3Fill className="wd-icon"/>,
    Courses: <FaBook className="wd-icon"/>,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon"/>,
    Inbox: <FaInbox className="wd-icon"/>,
    History: <FaHistory className="wd-icon"/>,
    Studio: <SiYoutubestudio className="wd-icon"/>,
    Commons: <RiLogoutBoxRLine className="wd-icon"/>,
    Help: <FiHelpCircle className="wd-icon"/>,
  };
  const {pathname} = useLocation();
  let {courseId} = useParams();

  let title = "";
  let subTitle = "";
  if (pathname.includes("Dashboard")) {
    title = "Dashboard";
  } else if (pathname.includes("Courses")) {
    title = courseId;
    if (pathname.includes("Home")) {
      subTitle = "Home";
    } else if (pathname.includes("Modules")) {
      subTitle = "Modules";
    } else if (pathname.includes("Assignments")) {
      subTitle = "Assignments";
    } else if (pathname.includes("Grades")) {
      subTitle = "Grades";
    }
  }

  return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark wd-bg-color-black">
          <div className="container-fluid">
            <a data-bs-toggle="collapse"
               onClick={() => setOpenKanbas(!openKanbas)} role="button"
               aria-expanded={openKanbas} aria-controls="kanbas-menu">
              <AiOutlineMenu className="wd-color-white"/>
            </a>
            <div className="text-centre wd-color-white">
              {title}
              <p className="mb-0 text-center">{subTitle}</p>
            </div>

            <div className="float-end">

              {/*{pathname.includes("Courses") && (
              <a data-bs-toggle="collapse" role="button"
                 onClick={() => setOpenCourse(!openCourse)}
                 aria-expanded={openCourse} aria-controls="course-menu">
                <AiOutlineMenu className="wd-color-white"/>
              </a>
              )}*/}
            </div>
          </div>
        </nav>
        <Collapse in={openKanbas}>
          <div className="collapse d-md-none" id="kanbas-menu">
            <div className="card card-body">
              <div className="row">
                <div className="col">
                  <div
                      className="list-group wd-collapsed-kanbas-navigation h-100
                  border-0">
                    <li key={0} className="list-group-item">
                      <RxCross2 onClick={() => setOpenKanbas(!openKanbas)}
                                style={{cursor: "pointer"}}/>
                    </li>
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            to={`/Kanbas/${link}`}
                            className={`list-group-item`}
                            onClick={() => setOpenKanbas(!openKanbas)}
                        >
                          <div className="row">
                            <div className="col-1 wd-color-red fs-6">
                              {linkToIconMap[link]}
                            </div>
                            <div className="col-11 wd-color-red"><span>
                              {link}
                            </span></div>
                          </div>
                        </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Collapse>
        <Collapse in={openCourse}>
          <div className="collapse d-md-none" id="course-menu">
            <div className="card card-body">
              <div className="row">
                <div className="col">
                  <div
                      className="list-group wd-account-navigation float-none border-0">
                    <li key={0} className="list-group-item">
                      <RxCross2 onClick={() => setOpenCourse(!openCourse)}
                                style={{cursor: "pointer"}}/>
                    </li>
                    {courseLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={`/Kanbas/Courses/${courseId}/${link}`}
                            className={`list-group-item`}
                            onClick={() => setOpenCourse(!openCourse)}
                        >
                          <div className="row">
                            <div className="col-1 wd-color-red fs-6">
                              {courseLinkToIcoNMap[link]}
                            </div>
                            <div className="col-11 wd-color-red">
                        <span>
                              {link}
                            </span></div>
                          </div>
                        </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Collapse>
      </>
  )
      ;
}

export default KanbasMobileNavigation;