import {useState} from "react";
import {useNavigate} from "react-router-dom";
import * as client from "./client";

function SignIn() {
  const [credentials, setCredentials] = useState({username: "", password: ""});
  const navigate = useNavigate();
  const signIn = async () => {
    try {
      const resp = await client.signIn(credentials);
      navigate("/project/account");
    } catch (e) {
      console.log(e);
      alert(e.response.data.message);
    }
  };
  return (
      <div>
        <h1>Sign In</h1>
        <label>Username</label>
        <input className={'form-control w-25 mb-2'} value={credentials.username} onChange={(e) => setCredentials(
            {...credentials, username: e.target.value})}/>
        <label>Password</label>
        <input className={'form-control w-25 mb-2'} value={credentials.password} onChange={(e) => setCredentials(
            {...credentials, password: e.target.value})}/>
        <button className={'btn btn-primary'} onClick={signIn}> Sign In</button>
      </div>
  );

}

export default SignIn