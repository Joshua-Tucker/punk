import React from "react";
import { Link } from "react-router-dom";
import Cards from "../../Components/Cards/Cards";
import "./CardContainer.scss";

const CardContainer = (props) => {
  const { beersData } = props;

  const beerCard = beersData.map((beer) => {
    const reducedDescription = beer.description.split(".");
    const descriptionArray = reducedDescription.map(
      (sentence) => sentence + "."
    );

    return (
      <Link
        style={{ textDecoration: "none" }}
        to={`/beer/${beer.name}`}
        key={beer.id}
      >
        <Cards
          name={beer.name}
          abv={beer.abv}
          image={beer.image_url}
          description={descriptionArray[0] + descriptionArray[1]}
        />
      </Link>
    );
  });

  return <div className="cardContainer">{beerCard}</div>;
};

export default CardContainer;
