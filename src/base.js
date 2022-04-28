import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database'; 
import 'firebase/storage';  
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAqMlGYpq870SoS9BQFeh-zARicHeBSU8M",
  authDomain: "very-hot-burgers-75af1.firebaseapp.com",
  databaseURL: "https://very-hot-burgers-75af1-default-rtdb.firebaseio.com",
  projectId: "very-hot-burgers-75af1",
  storageBucket: "very-hot-burgers-75af1.appspot.com",
  messagingSenderId: "478252259891",
  appId: "1:478252259891:web:c621805b9afed387522146"
})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base