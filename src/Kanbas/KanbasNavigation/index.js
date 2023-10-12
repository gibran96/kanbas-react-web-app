import {BiUserCircle} from "react-icons/bi";
import {RiDashboard3Fill, RiLogoutBoxRLine} from "react-icons/ri";
import {FaBook, FaHistory, FaInbox} from "react-icons/fa";
import {BsFillCalendar2WeekFill} from "react-icons/bs";
import {Link, useLocation} from "react-router-dom";
import "./index.css";
import {SiYoutubestudio} from "react-icons/si";
import {FiHelpCircle} from "react-icons/fi";

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox",
    "History", "Studio", "Commons", "Help"];

  const linkToIconMap = {
    Account: <BiUserCircle className="wd-icon"/>,
    Dashboard: <RiDashboard3Fill className="wd-icon"/>,
    Courses: <FaBook className="wd-icon"/>,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon"/>,
    Inbox: <FaInbox className="wd-icon"/>,
    History: <FaHistory className="wd-icon"/>,
    Studio : <SiYoutubestudio className="wd-icon"/>,
    Commons: <RiLogoutBoxRLine className="wd-icon"/>,
    Help: <FiHelpCircle className="wd-icon"/>,
  };

  const {pathname} = useLocation();
  return (
      <div className="list-group wd-kanbas-navigation">
        <Link key="nu-logo" to={`/Kanbas/Dashboard`} className={'wd-bg-color-black text-center'}>
          <img src={'../../images/nu-logo.png'} alt={'nu-logo'} className={'wd-nu-logo'}/>
        </Link>
        {links.map((link, index) => (
            <Link
                key={index}
                to={`/Kanbas/${link}`}
                className={`list-group-item wd-bg-color-black ${pathname.includes(
                    link) && "active"}`}
            >
              <div className="d-block text-center">
                {linkToIconMap[link]}
              </div>
              <div className="text-center wd-menu-text">
                {link}
              </div>
            </Link>
        ))}
      </div>
  );
}

export default KanbasNavigation;