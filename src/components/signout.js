import API from './auth.js'

function SignOut(){
    return API.fbAuth.currentUser && (
      <button className='sign-out' onClick={()=>API.fbAuth.signOut()}>Sign Out</button>
    )
}

export default SignOut;