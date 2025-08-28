import React, { useContext, useEffect, useState } from "react";
import Navigation from "../Components/Navigation";
import { StoreContext } from "../Components/StoreContext";
import axios from "axios";



const Login = ({ setShowlogin }) => {
  const [currtState, setcurrtState] = useState("Signup");
  const { url, setToken, token } = useContext(StoreContext)
  //const [showLogin, setShowLogin] = useState(false);
   
    
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((data) => ({ ...data, [name]: value }));
  };
  useEffect(() => {
    console.log("Updated form data:", data);
  }, [data]);


  async function onLogin(e) {
    e.preventDefault();
    console.log("form submitted");
    let newUrl = url;

    if (currtState === 'Login') {
      newUrl += "/api/users/login"
       
    }

    
    else {
      newUrl += "/api/users/register"

    }
    const resp = await axios.post(newUrl, data);
    if (resp.data.success) {
      setToken(resp.data.token);
      localStorage.setItem("token", resp.data.token)
       

      //setShowlogin(false)
      console.log("display the token", resp.data.token);
      
        

    }

    else {
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
    

        <input type="email" name="email" id="email" value={data.email}
          placeholder="Enter your Email" onChange={handleInput} required />
        <br></br>


        <input type="password" name="password" id="password" value={data.password}
          placeholder="Enter your Password" onChange={handleInput} required />
        <br></br>
        
        <button type="submit">{currtState === 'Signup' ? "Create Account" : "Login"} </button><br></br>

        {currtState === "Login" ?
          <p>
            Create a new account?<span onClick={() => setcurrtState('Signup')}>Click Here</span></p> :
          <p>Already have an Account? <span onClick={() => setcurrtState('Login')}>Login Here</span></p>
        }
        





      </form>


    </div>

  )
};

export default Login

