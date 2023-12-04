import * as client from "./client";
import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";

function Account() {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const {id} = useParams();
  const findUserById = async () => {
    const user = await client.findUserById(id);
    setAccount({
      ...user,
      dob: account?.dob ? account.dob.substring(0, 10) : ''
    });
  };
  const fetchAccount = async () => {
    const account = await client.account();
    setAccount({
      ...account,
      dob: account?.dob ? account.dob.substring(0, 10) : ''
    });
  };
  const signOut = async () => {
    await client.signOut();
    navigate('/project/signIn');
  };
  useEffect(() => {
    if (id) {
      findUserById();
    } else {
      fetchAccount();
    }
  }, []);
  const updateAccount = async () => {
    await client.updateUser(account);
  };
  console.log(account);
  return (
      <div className="w-50">
        <h1>Account</h1>
        {account && account?.username && (
            <div>
              <label>Username</label>
              <input value={account.username}
                     className={"form-control mb-2"}
                     onChange={(e) => setAccount({
                       ...account,
                       username: e.target.value
                     })}/>
              <label>First Name</label>
              <input value={account.firstName}
                     className={"form-control mb-2"}
                     onChange={(e) => setAccount({
                       ...account,
                       firstName: e.target.value
                     })}/>
              <label>Last Name</label>
              <input value={account.lastName}
                     className={"form-control mb-2"}
                     onChange={(e) => setAccount({
                       ...account,
                       lastName: e.target.value
                     })}/>
              <label>Date of Birth</label>
              <input value={account.dob}
                     className={"form-control mb-2"}
                     type={"date"}
                     onChange={(e) => setAccount({
                       ...account,
                       dob: e.target.value
                     })}/>
              <label>Email</label>
              <input value={account.email}
                     className={"form-control mb-2"}
                     onChange={(e) => setAccount({
                       ...account,
                       email: e.target.value
                     })}/>
              <label>Role</label>
              <select value={account.role} className={'form-select'}
                      onChange={(e) => setAccount({
                        ...account,
                        role: e.target.value
                      })}>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
              <button className={"btn btn-primary mt-2"}
                      onClick={updateAccount}>
                Save
              </button>
              {account.role === 'ADMIN' && <Link to={"/project/admin/users"}
                                                 className={"ms-2 btn btn-warning mt-2"}>
                Users</Link>}
              <button className={'btn btn-danger mt-2 ms-2'}
                      onClick={signOut}>Sign Out
              </button>
            </div>
        )}
      </div>
  );

}

export default Account;