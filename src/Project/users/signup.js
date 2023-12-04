import {useState} from "react";
import {useNavigate} from "react-router-dom";
import * as client from "./client";

function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "", password: ""
  });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signUp(credentials);
      navigate("/project/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
      <div>
        <h1>Signup</h1>
        {error && <div>{error}</div>}
        <label>Username</label>
        <input
            value={credentials.username}
            className={'form-control w-50 mb-2'}
            onChange={(e) => setCredentials({
              ...credentials,
              username: e.target.value
            })}/>
        <label>Password</label>
        <input
            value={credentials.password}
            className={'form-control w-50'}
            onChange={(e) => setCredentials({
              ...credentials,
              password: e.target.value
            })}/>
        <button className={'btn btn-primary mt-2'} onClick={signup}>
          Signup
        </button>
      </div>
  );
}

export default Signup;