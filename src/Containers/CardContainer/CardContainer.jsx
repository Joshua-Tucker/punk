import React from "react";
import Cards from "../../Components/Cards/Cards";
import "./CardContainer.scss"

const CardContainer = (props) => {
  const { beers } = props;

  const beerCard = beers.map((beer) => {
    return (
      <Cards
        key={beer.id}
        name={beer.name}
        abv={beer.abv}
        image={beer.image_url}
        description={beer.description}
      />
    );
  });

  return <div className="cardContainer">{beerCard}</div>;
};

export default CardContainer;
