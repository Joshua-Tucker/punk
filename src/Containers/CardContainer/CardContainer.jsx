import React from "react";
import { Link } from "react-router-dom";
import Cards from "../../Components/Cards/Cards";
import "./CardContainer.scss";

const CardContainer = (props) => {
  const { beersData } = props;

  const beerCard = beersData.map((beer) => {
    return (
      <Link to = {`/beer/${beer.name}`} key={beer.id}>
        <Cards
          name={beer.name}
          abv={beer.abv}
          image={beer.image_url}
          description={beer.description}
        />
      </Link>
    );
  });

  return <div className="cardContainer">{beerCard}</div>;
};

export default CardContainer;
