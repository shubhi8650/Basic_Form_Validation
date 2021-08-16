import { useState } from "react";
import "./styles.css";

export default function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userErr, setUserErr] = useState(false)
  const [passwordErr, setPasswordErr] = useState(false)


  const loginHandler=(e)=>{
    e.preventDefault();
    if(userErr || passwordErr || username.length === 0 || password.length === 0 ){
      alert("Enter correct value")
    }else{
      alert(`username: ${username} password:${password}`)
    }
    setPassword("");
    setUsername("");
  }

  const handleUsername=(e)=>{
    const variable = e.target.value;
    if(variable.length < 3){
      setUserErr(true)
    }else{
      setUserErr(false)
    }
    setUsername(variable)
  }

  const passwordHandler=(e)=>{
    const passVar = e.target.value;
    if(passVar.length >10){
      setPasswordErr(true);
    }else{
      setPasswordErr(false);
    }
    setPassword(passVar)
  }

  return (
    <div className="App">
      <h1>Form Validation Demo</h1>
      <form onSubmit={loginHandler}>
        <label>Username: </label>
        <input type="text" value={username} onChange={handleUsername}/>{userErr?<span>Invalid Username</span> : ""}
        <br/> <br/>
        <label>Password: </label>
        <input type="password" value={password} onChange={passwordHandler}/>{passwordErr?<span>Invalid Password</span> : ""}
        <br/> <br/>
        <button>Login</button>
      </form>
    </div>
  );
}
