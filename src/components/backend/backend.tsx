import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
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