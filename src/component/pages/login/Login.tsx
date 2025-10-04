
import React, { useState } from "react"
import logo from "../../../assets/logo.png"
import "./Login.css"
import {login,signUp} from "../../../../firebase"
import spinner from '../../../assets/netflix_spinner.gif'
export const Login = () => {

  const [signState, setSignState] = useState("Sign In")
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [loading,setLoading]=useState(false)
  const user_auth=async(event:React.FormEvent)=>{
    event.preventDefault()
    setLoading(true)
    if(signState==="Sign In"){
      await login(email,password)
    }else{
      await signUp(name,email,password)
    }
    setLoading(false)
  }
  const changeState = (state:string) => {
    setSignState(state)
  }



  return (
    loading ? <div className="login-spinner"> 
    <img src={spinner} alt="" /></div> :    // else

    <div className="login">
      <img src={logo} className=" login-logo" alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form >
          {signState == "Sign Up" ? <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Your name" name="" id="" /> : <></>}

          <input type="email" placeholder="Your email" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="" id="" />
          <input type="password" placeholder="Your password" value={password} onChange={(e)=>{setPassword(e.target.value)}} name="" id="" />
          <button onClick={user_auth} type="submit">{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remmeber me</label>
            </div>
            <p>Need Help</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? <p>Already have account ? <span onClick={()=>changeState("Sign Up")}>Sign Up Now</span></p> : <p>New to Netflix ?
            <span onClick={()=>changeState("Sign In")}>Sign In Now</span></p>}


        </div>
      </div>
    </div>

  )
}
