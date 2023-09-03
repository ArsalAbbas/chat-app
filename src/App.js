import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import API from './components/auth.js'
import ChatRoom from './components/chatroom';
import SignIn from './components/signin';

function App() {
  const [user]= useAuthState(API.fbAuth);
  return (
    <div className="App">
      <header></header>
      <section>
        {user?<ChatRoom/> : 
          <SignIn/>
        }
      </section>
    </div>
  );
}
export default App;
