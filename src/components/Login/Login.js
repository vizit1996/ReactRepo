import React, {useState} from "react";
import PropTypes from 'prop-types';
import './Login.css';

async function LoginUser(credentials){
    return fetch("http://localhost:8080/api/auth/signin" ,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

function Login({setToken}) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await LoginUser({
            username,
            password
        });
        setToken(token);
    }



  return (
    <div className="login-wrapper">
      <h1>Please Login</h1>

      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUsername(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;
