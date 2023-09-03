import firebase from "firebase/compat/app";
import API from './auth.js'
import googleImage from '../assets/logo.png'
import SummonMeme from "./summonmeme.js";

function SignIn(){
    const signInWithGoogle=()=>{
      const provider=new firebase.auth.GoogleAuthProvider();
      API.fbAuth.signInWithPopup(provider);
    }
    return <>
      <header>
        <h1>🗨️ TempChat</h1>
      </header>
      <h1 className="text">Welcome to TempChat</h1>
        <button className="sign-in" onClick={signInWithGoogle}> 
          <img src={googleImage} alt="" className="gImage" /> &nbsp;
           Sign in with Google </button>
           <br />
        <SummonMeme/>
    </>
  }

  export default SignIn