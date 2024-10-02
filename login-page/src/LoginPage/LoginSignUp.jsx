
import { useState } from 'react'
import './LoginPage.css'

const Login = () => {

  const [action,setAction] = useState("Sign Up");
  return (
    <div className='container'>
     <div className="header">
      <div className="text">{action}</div>
      <div className="underline"></div>
      </div> 
      <div className="inputs"> 
        {action==="Login"?<div></div>:<div className="input">
          <input type="text" placeholder='Name' />
        </div>}
        
        <div className="input">
          <input type="email" placeholder='Email' />
        </div>
        <div className="input">
          <input type="password" placeholder='password' />
        </div>
      </div>
      {action==="Sign Up"?<div></div>: <div className="forgot-password">Lost Password? <span>Click Here</span> </div>}     
      <div className="summit-container">
        <div className={action=== "Login"?"summit grey":"summit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"summit grey":"summit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
  )
}

export default Login