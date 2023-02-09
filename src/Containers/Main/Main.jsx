import React from 'react'
import CardContainer from "../CardContainer/CardContainer"


const Main = (props) => {

  const {beers} = props


  return (
    <div> Main
        <CardContainer beers={beers}/>
    </div>
  )
}

export default Main
