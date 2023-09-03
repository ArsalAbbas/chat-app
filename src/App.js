import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import './App.css';
import {useRef, useState} from 'react'
// import { useAuthState  } from "react-firebase-hooks/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp(
{
    apiKey: "AIzaSyDidkr9MYYQCnCymWmBXfs9P3zY6XCyJsA",
    authDomain: "chat-app-37dc4.firebaseapp.com",
    projectId: "chat-app-37dc4",
    storageBucket: "chat-app-37dc4.appspot.com",
    messagingSenderId: "742119306474",
    appId: "1:742119306474:web:a4f4e05adf4d9b3e74d393",
    measurementId: "G-ZJZX4LQ9FV"
})
const auth=firebase.auth();
const firestore=firebase.firestore();
function App() {
  const [user]= useAuthState(auth);
  return (
    <div className="App">
      <header></header>
      <section>
        {user?<ChatRoom/> : <SignIn/>}
      </section>
    </div>
  );
}

function SignIn(){
  const signInWithGoogle=()=>{
    const provider=new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <button onClick={signInWithGoogle}> Sign in with Google </button>
  )
}
function SignOut(){
  return auth.currentUser && (
    <button onClick={()=>auth.signOut()}>Sign Out</button>
  )
}

function ChatRoom(){
const messageRef=firestore.collection('messages');
const query = messageRef.orderBy('createdAt').limit(25);
const dummy=useRef();
const [messages]= useCollectionData(query,{idField:'id'});
const [formValue,setFormValue]= useState('');
// console.log(error)
const sendMessage=async(e)=>{
  e.preventDefault();
  const {uid,photoURL}=auth.currentUser;
  await messageRef.add(
    {
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    }
  )
  setFormValue('')
  dummy.current.scrollIntoView({behavior: 'smooth'})
}

return (
  <>
  <SignOut className='signout'/>
  <main>
  {messages && messages.map(msg=><ChatMessage key={msg.id} message={msg} />)}
  <div ref={dummy}></div>
  </main>
  <form action="" onSubmit={sendMessage}>
    <input value={formValue} onChange={(e)=>{ setFormValue(e.target.value)}} />
    <button type='submit'> &gt; </button>
  </form>
  </>
)
// return <>
//   You are logged in
// </>

}

function ChatMessage(props){
  const {text,uid,photoURL}=props.message;
  const messageClass=uid== auth.currentUser.uid ? 'sent': 'received;'
  return <div className={`message ${messageClass}`}>
    <img src={photoURL} alt="userImage" />
    <p>{text}</p>
  </div>
}
export default App;
