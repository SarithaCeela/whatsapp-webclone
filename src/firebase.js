import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCQwgRlQyFd37EL_RlPHjfPRvJ91ZdraIg",
    authDomain: "whatsapp-web-clone-d61c0.firebaseapp.com",
    projectId: "whatsapp-web-clone-d61c0",
    storageBucket: "whatsapp-web-clone-d61c0.appspot.com",
    messagingSenderId: "404962555890",
    appId: "1:404962555890:web:0ee8632bee0fad0a221d6b"
  };
  
  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

 export { auth, provider };
  export default db;