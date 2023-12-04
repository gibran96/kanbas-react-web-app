import {Link} from "react-router-dom";

function NavBar() {
  return (
      <div className="list-group">
        <Link to="/Project/" className="list-group-item">
          Home
        </Link>
        <Link to="/Project/signIn" className="list-group-item">
          Sign In
        </Link>
        <Link to="/Project/signup" className="list-group-item">
          Sign Up
        </Link>
        <Link to="/Project/account" className="list-group-item">
          Account
        </Link>
        <Link to="/Project/search" className="list-group-item">
          Search
        </Link>
        <Link to="/Project/users" className="list-group-item">
          Users
        </Link>
      </div>
  )
}

export default NavBar;