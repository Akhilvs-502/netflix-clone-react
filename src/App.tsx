import './App.css'
import Home from './component/pages/home/home'
import {Login} from './component/pages/login/Login'
import {Player} from './component/pages/player/Player'
import { Routes,Route, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify';
import './index.css'
import { useEffect } from 'react'
import { auth } from '../firebase'
function App() {
  const navigate=useNavigate()
  useEffect(()=>{
    onAuthStateChanged(auth,async(user)=>{
      if(user){
        console.log("Logged In");
        navigate("/")
      }else{
        console.log("Logged Out");
        navigate("/login")
        
      }
    })
  },[])
  return (
    <>
    <ToastContainer theme='dark' />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/player/:id' element={ <Player/>}/>
    </Routes>
    </>
  )
}

export default App
