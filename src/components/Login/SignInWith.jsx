import React from 'react'
import icoImg from '../../assets/icons/google.svg'
import icoImg2 from '../../assets/icons/facebook.svg'
import { FaGithub } from 'react-icons/fa6'
const SignInWith = ({login, setLogin}) => {
  return (
    <>
      <div className="login-with">
         <h4>Sign In With</h4>
         <div className="ico-wrap">
           <div className="ico-b">
           <img src={icoImg} alt="" />
           </div>
           <div className="ico-b">
            <img src={icoImg2} alt="" />
           </div>
           <div className="ico-b">
            <FaGithub />
           </div>
         </div>
      </div>
      <div className="do">
        {login && <p>Don't have account? <span onClick={() => {setLogin(false);}}>Sign Up</span></p>}
        {!login && <p>Already have account? <span onClick={() => {setLogin(true);}}>Login</span></p>}
      </div>
    </>
  )
}



export default SignInWith