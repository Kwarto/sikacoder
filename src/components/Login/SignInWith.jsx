import React from 'react'
import icoImg from '../../assets/icons/google.svg'
// import icoImg2 from '../../assets/icons/facebook.svg'
import { FaGithub } from 'react-icons/fa6'
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth, db } from '../../../firebaseConfig'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
const SignInWith = ({login, setLogin}) => {
  const navigate = useNavigate()
  const Provider = new GoogleAuthProvider();
  const providerGit = new GithubAuthProvider;
  const handleGithubLogin = async (e) => {
    e.preventDefault();
    signInWithPopup(auth, providerGit).then((response) => {
      setDoc(doc(db, "users", response.user.uid),{
        email: response.user.email,
        username: response.user.displayName,
        userProfile: response.user.photoURL,
        userId: response.user.uid,
        dateJoined: serverTimestamp()
      })
      navigate(`/overview`);
    }).catch((err) => {
      alert(err.message);
    })
  }

    const handleGooglePop = async (e) => {
    e.preventDefault();
    signInWithPopup(auth, Provider).then((response) => {
      setDoc(doc(db, "users", response.user.uid),{
        email: response.user.email,
        username: response.user.displayName,
        userProfile: response.user.photoURL,
        userId: response.user.uid,
        dateJoined: serverTimestamp()
      })
      navigate('/overview');
    }).catch((err) => {
      console.log(err.message);
    })
  }

  return (
    <>
      <div className="login-with">
         <h4>Sign In With</h4>
         <div className="ico-wrap">
           <div className="ico-b" onClick={handleGooglePop}>
           <img src={icoImg} alt="" />
           </div>
           {/* <div className="ico-b">
            <img src={icoImg2} alt="" />
           </div> */}
           <div className="ico-b" onClick={handleGithubLogin}>
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