import Modules from "../Modules";
import "./index.css"
import CourseStatus from "./CourseStatus";

function Home() {
  return (
      <div className="row">
        <div className="col col-xl-7 col-xxl-8">

          <div className={'row mt-4'}>
            <Modules/>
          </div>
        </div>
        <div className="d-none d-xl-block col-xl-5 col-xxl-4 px-5">
          <CourseStatus/>
        </div>
      </div>
  );
}

export default Home;