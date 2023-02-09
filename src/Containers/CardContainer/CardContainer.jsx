import React from 'react'
import Cards from "../../Components/Cards/Cards"

const CardContainer = (props) => {

    const {beers} = props

    const beerCard = beers.map((beer)=>{
        return (
            <Cards
            key={beer.id}
            name={beer.name}
            abv={beer.abv}
            image={beer.image_url}
            description={beer.description}
            />
        )
    })


  return (
    <div>{beerCard}
    </div>
  )
}

export default CardContainer
