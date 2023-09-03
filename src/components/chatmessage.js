import API from './auth.js'

function ChatMessage(props){
    const {text,uid,photoURL}=props.message;
    const messageClass= uid=== API.fbAuth.currentUser.uid ? 'sent': 'received;'
    return <div className={`message ${messageClass}`}>
      <img className='chatImg' src={photoURL} alt="userImage" />
      <p>{text}</p>
    </div>
  }

  export default ChatMessage;