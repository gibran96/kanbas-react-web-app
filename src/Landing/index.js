import {Link} from "react-router-dom";

function landing() {
  return (
      <div>
        <div className="row">
          <div className="col">
            <div className="fs-1 text-center">Welcome to Gibran's Web
              Development portfolio
            </div>
          </div>
        </div>
        <div className="list-group mt-4 px-5">
          <Link to="/Labs/"
                className="list-group-item list-group-item-action">
            <div className={'fw-bold'}>Labs</div>
            <div className={'fst-italic'}>The lab work for the assignments.</div>
          </Link>
          <Link to="/Kanbas/"
                className="list-group-item list-group-item-action">
            <div className={'fw-bold'}>Kanbas</div>
            <div className={'fst-italic'}>The application being developed in the assignments.</div>
          </Link>
        </div>
      </div>
  );
}

export default landing;