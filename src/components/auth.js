import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

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

    const API={fbAuth: auth, fbStore: firestore}
    

export default API;