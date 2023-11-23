import {Navigate, Route, Routes} from "react-router-dom";
import SignIn from "./users/signin";
import NavBar from "./nav";
import Account from "./users/account";
import UserTable from "./users/table";
import Signup from "./users/signup";

function Project() {
  return (
      <div className={'container-fluid'}>
        <h1>Project</h1>
        <div className={'row'}>
          <div className={'col-2'}>
            <NavBar/>
          </div>
          <div className={'col-10'}>
            <Routes>
              <Route path={"/"} element={<Navigate to={'signIn'}/>}/>
              <Route path={"signIn"} element={<SignIn/>}/>
              <Route path={"signup"} element={<Signup/>}/>
              <Route path={"account"} element={<Account/>}/>
              <Route path={"account/:id"} element={<Account/>}/>
              <Route path={"admin/users"} element={<UserTable/>}/>
            </Routes>
          </div>
        </div>
      </div>
  )
}

export default Project;