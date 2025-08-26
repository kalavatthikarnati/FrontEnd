import React, { useContext, useEffect, useState } from "react";
import Navigation from "../Components/Navigation";
import { StoreContext } from "../Components/StoreContext";
import axios from "axios";

const Login = () => {
  const [currtState, setcurrtState] = useState("Signup");
  const {url,setToken,token}=useContext(StoreContext)
    const [showLogin, setShowLogin] = useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((data) => ({ ...data, [name]: value }));
  };
  useEffect(()=>{
  console.log("Updated form data:", data);
},[data]);


   async function onLogin(e){
    e.preventDefault();
    console.log("form submitted");
    let newUrl =url;
      let payload = {};
    if(currtState==='Login'){
      newUrl+="/api/users/login"
      payload = {
      email: data.email,
      password: data.password,
    };
    }
    else{
      newUrl+="/api/users/register"
      payload = {
      email: data.email,
      password: data.password,
    };
    }
    const resp =await axios.post(newUrl,payload);
    if(resp.data.success){
      setToken(resp.data.token);
      localStorage.setItem("token",resp.data.token)
      setShowlogin(false)
    }
    else{
     alert(resp.data.message)
   }
     
   }

  return (
  <div>
    <Navigation />
<form onSubmit={onLogin} action="" >

  {currtState === "Login" ?  <h2>Login Form</h2>: <h2>SignUp Form</h2>}

   
  {currtState === "Login" ? <></>: <input type="text" name="name" id="name"  value={data.name}
placeholder="Enter your Name"
       onChange={handleInput}  required />}<br></br>
    
      <input type="email" name="email" id="email"   value={data.email}
placeholder="Enter your Email" onChange={handleInput}  required  />
     <br></br>
      
     
      <input type="password" name="password" id="password" value={data.password}
 placeholder="Enter your Password" onChange={handleInput}  required  />
      <br></br>
      <button>{currtState==='Signup' ? "create account":"Login"}</button>

      {currtState==="Login" ?  
  <p>
    Create a new account <span onClick={()=>setcurrtState('Signup')}>SignUp</span></p>:
   <span>Already have an Account : <p onClick={()=>setcurrtState('Login')}>Login Here</p></span>
  
}
</form>
</div>

  )
};

export default Login

