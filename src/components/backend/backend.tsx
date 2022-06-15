import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged,signInWithPopup,signOut, GoogleAuthProvider } from "firebase/auth";

import { getDocs,collection,getFirestore } from "firebase/firestore";
export const getReview =async()=>{
    let data:any[] = [];
    try{
        const fetchReview = await getDocs(collection(getFirestore(),`review`));
            fetchReview.docs.forEach((doc)=>{
                data.push({...doc.data()});
        });
    } catch(error){
        console.log(error);
    }
    return data;
};
export const signIn =()=>{
const provider = new GoogleAuthProvider();
const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // // This gives you a Google Access Token. You can use it to access the Google API.
    const credential:any = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    return user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    console.log(errorCode);
    const errorMessage = error.message;
    console.log(errorMessage);
    // The email of the user's account used.
    const email = error.customData.email;
    console.log(email)
    // The AuthCredential type that was used.
    // const credential = GoogleAuthProvider.credentialFromError(error);
    // // ...
  });
}
export const observer=()=>{
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const name =  user.displayName;
    const photoUrl =  user.photoURL
    console.log(name , photoUrl)
    // const uid = user.uid;
    // console.log(uid);
    // ...
  } else {
    console.log('signed out');
    // User is signed out
    // ...
  }
});
}
export const signOuts =()=>{ 
   const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  const errorMessage = error.message;
  console.log(errorMessage);
  // An error happened.
});
}
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCT9byEQlYHfJUSaxlm_YyhhG-BL5CnZaA",
    authDomain: "restaurant-bf752.firebaseapp.com",
    projectId: "restaurant-bf752",
    storageBucket: "restaurant-bf752.appspot.com",
    messagingSenderId: "1018897913235",
    appId: "1:1018897913235:web:36a68499e71b61ce974466"
  };
  
  // Initialize Firebase
  initializeApp(firebaseConfig);