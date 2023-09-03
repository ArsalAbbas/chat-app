import API from './auth.js'

function SignOut(){
    return API.fbAuth.currentUser && (
      <button onClick={()=>API.fbAuth.signOut()}>Sign Out</button>
    )
}

export default SignOut;