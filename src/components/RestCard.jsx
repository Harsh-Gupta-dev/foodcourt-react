import React from 'react'
import "./Restcard.css"
import {IMG_CDN_URL} from "../data"


const RestCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating
}) => {
  return (
    <div className="card">
    <img src={IMG_CDN_URL + cloudinaryImageId} alt ="jak" />
     <h2>{name}</h2>
     <h3>{cuisines.join(", ")}</h3> 
     <h4>{avgRating} stars</h4>
    </div>
  )
}

export default RestCard
