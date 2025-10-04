import { Navbar } from "../../navBar/navbar"
import hero_banner from "../../../assets/hero_banner.jpg"
import hero_title from "../../../assets/hero_title.png"
import play_icon from "../../../assets/play_icon.png"
import info_icon from "../../../assets/info_icon.png"
import "./home.css"
import { TitleCards } from "../../TitleCards/TitleCards"
import { Footer } from "../../footer/footer"
 const Home=()=>{
    return (
        <div className="home">
            <Navbar/>
        <div className="hero">
            <img src={hero_banner} alt="" className="banner_img" />
            <div className="hero-caption">
                <img src={hero_title} alt="" className="caption_img" />
                <p>Discovering his ties to a secret ancient order, a young man living in modern
                     Istanbul embraks on a quest to save the city from an immortal enemy.</p>
            <div className="hero-btns">
                <button className="btn"><img src={play_icon} alt="" />Play</button>
                <button className="btn dark_btn" ><img src={info_icon} alt="" />More info</button>
            </div>
            <div className="title-cards">

            <TitleCards/>
            </div>
            </div>
        </div>
        <div className="more_cards">
            <TitleCards title={"Blockbuster Movies"} category={"popular"}/>
            <TitleCards title={"Upcoming"}  category={"upcoming"}/>
            <TitleCards title={"Only on NetFlix"} category={"top_rated"}/>
            <TitleCards title={"Topic for you"} category={""}/>
        </div>
       <Footer/>
        </div>
    )
}

export default Home