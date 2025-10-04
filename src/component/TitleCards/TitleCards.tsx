
import "./TitleCards.css"
import cards_data from '../../assets/cards/Cards_data.js'
import React, { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
export const TitleCards = ({ title, category }) => {
    const [apiData,setApiData]=useState([])
 
    const cardsRef = useRef()
 


    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjNiM2ExNWQ2MDA3YjQ1MDMyMTdkZWQ1YThlMjIxNyIsIm5iZiI6MTczNjU4MDY2MS44NSwic3ViIjoiNjc4MjFlMzVhYmFiYmJhMDQwYmIxM2VkIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.HbcXEpVxgrZTDH8LWNSG8DWZo1Nuxj31q9mbe1m1yAY'
        }
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
            .then(res => res.json())
            .then(res => setApiData(res.results))
            .catch(err => console.error(err));
    })



    const handleWheel = (event:React.FormEvent) => {
        event.preventDefault();
        cardsRef.current.scrollLeft += event.deltaY
    }
    useEffect(() => {
        cardsRef.current.addEventListener("wheel", handleWheel)
    }, [])
    return (
        <div className="titleCards">
            <h2>{title ? title : "Popular on Netflix"}</h2>
            <div className="card_list" ref={cardsRef}>
                {apiData.map((card, index) => {
                    return <Link to={`player/${card.id}`}> <div className="Card" key={index}>
                        <img src={'https://image.tmdb.org/t/p/w500/'+card.backdrop_path} alt="" />
                        <p>{card.original_title}</p>
                    </div> </Link>
                })}
            </div>
        </div>)
}
