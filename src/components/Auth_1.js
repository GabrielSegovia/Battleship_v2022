import React, {useState} from "react";
import axios from 'axios';

export default function LoginToken () {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errStyle, setErr] = useState({backgroundColor:"white"});
  
  const loginClick = () => {
    axios.post('http://104.248.104.227/login', {username, password})
    .then((response) => {
      setErr({backgroundColor:"green"});
      let token = response.data.token;
      console.log(token);
      setUsername("");
      setPassword("");
    }).catch((err) => {
      setErr({backgroundColor:"red"});
      setPassword("");
    });
  };


  const onInputChange = (event, setStateFct) =>{
    setStateFct(event.target.value);
  }
  return(
    <div>
    <h2>Login Page</h2>
    <h3 estyle={errStyle}>aqui</h3>
      <input type="text" placeholder="username" 
      value={username} onChange={(event) => 
        onInputChange(event, setUsername)} />
      <br/>
      <input type="password" placeholder="password"  value={password} onChange={(event) => 
        onInputChange(event, setPassword)} />
      <br/>
      <button onClick={()=>loginClick()}>Login</button>
      <br/>
      <button style={errStyle}>Message</button>
    </div>
  )
}