import React, { useState } from 'react'
import Navigation from '../Components/Navigation'
import Login from './Login'


const Home = () => {
  const [showLogin, setShowlogin]= useState(false);
  return (
    <div>
  
      <Navigation setShowlogin={setShowlogin}/>
       {showLogin ? <Login setShowlogin={setShowlogin}/> : <></>}
    </div>
  )
}

export default Home
