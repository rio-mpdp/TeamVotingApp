import firebase from "firebase";
try{
firebase.initializeApp({
  apiKey: "AIzaSyANC4DMyBTzlGdNSfMeM98n1j-MXWWqQI4",
  authDomain: "hot-air-balloon-d86d8.firebaseapp.com",
  databaseURL: "https://hot-air-balloon-d86d8-default-rtdb.firebaseio.com",
  projectId: "hot-air-balloon-d86d8",
  storageBucket: "hot-air-balloon-d86d8.appspot.com",
  messagingSenderId: "165820839221",
  appId: "1:165820839221:web:1732eebb5354a94b95887c"
})
}catch(error){
console.log("Error reading database")
}
const db=firebase.database()
export default db