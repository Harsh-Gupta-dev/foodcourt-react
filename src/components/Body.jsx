import React from 'react'
import RestCard from './RestCard'
import "./Body.css"
import {restaurantList} from "../data"

const Body = () => {
  return (
    
    <div className='rest-list'>
        {
         restaurantList.map((restaurant)=>{
            return <RestCard {...restaurant.data} key = {restaurant.data.id} />
          })
        }

    </div>
   
  )
}

export default Body
