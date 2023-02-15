import "./PageContainer.scss";
import { useParams } from "react-router-dom";


const PageContainer = ({beersData}) => {
    const {name} = useParams();

    const targetArray =beersData.filter((beer)=>{
        if (beer.name == name){
            return true
        }
    })
const targetObject = targetArray[0]
console.log(targetObject)
  return (
    <div className="pageContainer">
      <div className="pageContainer__image-container">
        <img className="pageContainer__image" src={targetObject.image_url} alt={targetObject.name}/>
      </div>
      <div className="pageContainer__content-container">
        <h1 className="pageContainer__tagline">{targetObject.tagline}</h1>
        <h2 className="pageContainer__name">{targetObject.name}</h2>
        <p className="pageContainer__description">{targetObject.description}</p>
        <div className="pageContainer__stats-container">
          <p className="pageContainer__abv">{targetObject.abv}</p>
          <p className="pageContainer__first-brewed">{targetObject.first_brewed}</p>
          <p className="pageContainer__ph"> {targetObject.ph}</p>
        </div>
        <h2 className="pageContainer__food-pairing">{targetObject.food_pairing}</h2>
        <h3 className="pageContainer__brewers-tips">{targetObject.brewers_tips}</h3>
      </div>
    </div>
  );
};

export default PageContainer;
