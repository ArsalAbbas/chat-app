import firebase from "firebase/compat/app";
import API from './auth.js'

function SignIn(){
    const signInWithGoogle=()=>{
      const provider=new firebase.auth.GoogleAuthProvider();
      API.fbAuth.signInWithPopup(provider);
    }
    return (
      <button onClick={signInWithGoogle}> Sign in with Google </button>
    )
  }

  export default SignIn