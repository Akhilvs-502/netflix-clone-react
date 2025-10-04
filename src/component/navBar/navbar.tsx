
import './nav.css'
import logo from "../../assets/logo.png"
import search_icon from "../../assets/search_icon.svg"
import bell_icon from "../../assets/bell_icon.svg"
import profile_image from "../../assets/profile_img.png"
import dropdown from "../../assets/caret_icon.svg"
import { useEffect, useRef } from 'react'
import { logout } from '../../../firebase'
export const Navbar = () => {
  const navRef=useRef()
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY >=80){
        navRef.current.classList.add("nav-dark")
      }else{
        navRef.current.classList.remove("nav-dark")

      }
    })
  },[])
  return (
    <div ref={navRef} className='navBar'>
        <div className="navBar_left">
            <img src={logo} alt="" />
            <ul>
              <li>Home</li>
              <li>TV Shows</li>
              <li>Movies</li>
              <li>New & Popular</li>
              <li>My list</li>
              <li>Browse by Languages</li>
            </ul>

        </div>
        <div className="navBar_right">
          <img src={search_icon} alt="" className='icon'/>
          <img src={bell_icon} alt="" className='icon'/>
          <div className="navbar-profile">
            <img src={profile_image} alt=""   className='profile'/>
            <img src={dropdown} alt=""  />
            <div className="dropdown">
              <p onClick={logout}>Sign out NetFlix</p>
            </div>
          </div>
        </div>
    </div>
  )
}
