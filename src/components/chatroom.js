import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import '../App.css';
import {useRef, useState} from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import API from './auth.js'
import ChatMessage from './chatmessage';
import SignOut from './signout';

function ChatRoom(){
    const messageRef=API.fbStore.collection('messages');
    const query = messageRef.orderBy('createdAt').limit(25);
    const dummy=useRef();
    const [messages]= useCollectionData(query,{idField:'id'});
    const [formValue,setFormValue]= useState('');
    const sendMessage=async(e)=>{
      e.preventDefault();
      const {uid,photoURL}=API.fbAuth.currentUser;
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
    }

    export default ChatRoom