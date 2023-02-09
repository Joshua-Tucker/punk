import React from 'react'
import "./Cards.scss"


const Cards = (props) => {
    const {name, abv, description, image} = props
  return (
    <div className="beer-card">
        <img className="beer-card__image" src={image} alt={name}></img>
        <h1 className="beer-card__name">{name}</h1>
        <h2 className="beer-card__description">{description}</h2>
        <p className="beer-card__abv">{abv}</p>
    </div>
  )
}

export default Cards
