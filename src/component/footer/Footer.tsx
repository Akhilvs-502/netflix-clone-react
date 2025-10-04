import React from 'react'
import youtubeIcon from "../../assets/youtube_icon.png"
import instagramIcon from "../../assets/instagram_icon.png"
import twitterIcon from "../../assets/twitter_icon.png"
import facebookIcon from "../../assets/facebook_icon.png"
import "./Footer.css"
export  const Footer = () => {
  return (
   <div className="footer">
    <div className="footer-icons">
        <img src={youtubeIcon} alt="" />
        <img src={instagramIcon} alt="" />
        <img src={twitterIcon} alt="" />
        <img src={facebookIcon} alt="" />
    </div>
    <ul>
      <li>Audio Description</li>
      <li>Help Center</li>
      <li>Gift Cards</li>
      <li>Media Centre</li>
      <li>Investor Relations</li>
      <li>Jobs</li>
      <li>Terms of Use</li>
      <li>Privacy</li>
      <li>Legal Notices</li>
      <li>Cookie Prefernece</li>
      <li>Coporate Information</li>
      <li>Contact Us</li>
      </ul>
      <p className='copyright_text'>@1997-2025 Netflix, inc</p>
   </div>
  )
}
