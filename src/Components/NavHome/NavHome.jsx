import React from 'react'
import "./NavHome.scss"
import whiteCross from "../../assets/images/whiteCross.png"

const NavHome = (toggleHome) => {

  return (
    <div>
<img src={whiteCross} alt="Close Menu" className='home-menu__cross' onClick={toggleHome}/>

    </div>
  )
}

export default NavHome