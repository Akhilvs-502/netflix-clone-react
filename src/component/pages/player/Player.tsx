
import { useEffect, useState } from "react";
import arrow_icon from "../../../assets/back_arrow_icon.png"

import './player.css'
import {useNavigate,useParams } from "react-router-dom";

export const Player = () => {
  const{id}=useParams();
  const navigate=useNavigate()
  const [apiData,setApiData]=useState({
    name:"",
    key:"",
    published_at:"",
    type:""
  })
  const url=`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjNiM2ExNWQ2MDA3YjQ1MDMyMTdkZWQ1YThlMjIxNyIsIm5iZiI6MTczNjU4MDY2MS44NSwic3ViIjoiNjc4MjFlMzVhYmFiYmJhMDQwYmIxM2VkIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.HbcXEpVxgrZTDH8LWNSG8DWZo1Nuxj31q9mbe1m1yAY'
    }
  };
  
useEffect(()=>{
  fetch(url, options)
  .then(res => res.json())
  .then(json =>setApiData(json.results[0]))
  .catch(err => console.error(err));
},[])


  return (
    <div>
        <div className="player">
            <img src={arrow_icon} alt="" onClick={()=>{navigate(-1)}} />
            <iframe width='90%' height='90%'  src={`https://www.youtube.com/embed/${apiData.key}`} frameborder="0" title='trailer' allowFullScreen ></iframe>
            <div className="player-info">
            <p>{apiData.published_at.slice(0,10)}</p>
            <p>{apiData.name}</p>
            <p>{apiData.type}</p>
            </div>
        </div>
    </div>
  )
}
 