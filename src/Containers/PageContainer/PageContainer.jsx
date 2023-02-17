import "./PageContainer2.scss";
import { useParams } from "react-router-dom";
import whiteCross from "../../assets/images/whiteCross.png";
import { Link } from "react-router-dom";

const PageContainer = ({ beersData }) => {
  const { name } = useParams();

  const targetArray = beersData.filter((beer) => {
    if (beer.name == name) {
      return true;
    }
  });

  const targetObject = targetArray[0];
  console.log(targetObject);
  return (
    <div className="pageContainer">
      <div className="pageContainer__main">
        <div className="pageContainer__image-container">
          <img
            className="pageContainer__image"
            src={targetObject.image_url}
            alt={targetObject.name}
          />
        </div>

        <div className="pageContainer__content-container">
          <h2 className="pageContainer__tagline">"{targetObject.tagline}"</h2>
          <h1 className="pageContainer__name">
            This is{" "}
            <span className="pageContainer__dynamic-name">
              {targetObject.name}
            </span>
          </h1>

          <div className="pageContainer__stats-container">

            <div className="pageContainer__stats-title">
              <h3>The Stats</h3>
            </div>

            <div className="pageContainer__stats-content">

              <div className="pageContainer__abv-container">
                <p className="pageContainer__abv-label">ABV</p>
                <p className="pageContainer__abv">{targetObject.abv}</p>
              </div>

              <div className="pageContainer__first-brewed-container">
                <p className="pageContainer__first-brewed-label">
                  First brewed
                </p>
                <p className="pageContainer__first-brewed">
                  {targetObject.first_brewed}
                </p>
              </div>

              <div className="pageContainer__ph-container">
                <p className="pageContainer__ph-label">PH</p>
                <p className="pageContainer__ph">{targetObject.ph}</p>
              </div>

            </div>
          </div>

          <div className="pageContainer__food-container">
            <h3>Food pairing's</h3>
            <p className="pageContainer__food-pairing">
              {targetObject.food_pairing[0]}, {targetObject.food_pairing[1]},{" "}
              {targetObject.food_pairing[2]}
            </p>
          </div>
          
          <div className="pageContainer__brewer-container">
            <h3>Our Brewer's Tips...</h3>
            <p className="pageContainer__brewers-tips">
              {targetObject.brewers_tips}
            </p>
          </div>
        </div>
        <Link style={{ textDecoration: "none" }} to="/">
          <div className="pageContainer__cross-container">
            <img
              src={whiteCross}
              alt="Close Menu"
              className="pageContainer__cross"
              // onClick={toggleHome}
            />
          </div>
        </Link>
      </div>

      <div className="pageContainer__description-container">
        <p className="pageContainer__description">{targetObject.description}</p>
      </div>
    </div>
  );
};

export default PageContainer;
