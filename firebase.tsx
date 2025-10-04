// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgt6AUaEstGi0lWxW6lNlvUUFPxrMZbcc",
  authDomain: "netflix-clone-d53da.firebaseapp.com",
  projectId: "netflix-clone-d53da",
  storageBucket: "netflix-clone-d53da.firebasestorage.app",
  messagingSenderId: "25638429707",
  appId: "1:25638429707:web:bead072db82a05f66e130e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const db= getFirestore(app)



// -------------------------------------------------------------------------------------------------
const signUp=async (name:string,email:string,password:string)=>{
  try{
   const response= await createUserWithEmailAndPassword(auth,email,password)
   const user=response.user
   await addDoc(collection(db,"user"),{
    uid:user.uid,
    name,
    authProvider:"local",
    email,
   })
  }catch(err){
    console.log(err);
    toast.error(err.code.split('/')[1].split('-').join(" "))
    
  }
}


const login=(email:string,password:string)=>{
    let res=signInWithEmailAndPassword(auth,email,password)
    res.then((data)=>{
      console.log(data);
      
    }).catch((err)=>{
      toast.error(err.code.split('/')[1].split('-').join(" "))      
    })
}

const logout=()=>{
  signOut(auth)

}

export {auth,db,login,signUp,logout}