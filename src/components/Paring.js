import { useState } from "react"
import veg from '../images/ParingIcons/bell-pepper-svgrepo-com 1 (1).png'
import fish from '../images/ParingIcons/fish-svgrepo-com 1 (1).png'
import meat from '../images/ParingIcons/meat-on-the-bone-1-svgrepo-com 1 (1).png'
import cheese from '../images/ParingIcons/SmallPairngIcons/reshot-icon-cheese-5FDLGPV2JE 1.png'
import seafood from '../images/ParingIcons/reshot-icon-crab-6DLGZ5Q3EF 1 (1).png'

function Paring({ wineSearch }) {
    // search wines by food pairing
    const handleParingClick = (e) => {
      const selectedFood = e.target.getAttribute("value")
      wineSearch({ paring: selectedFood })
    }

  return (
    <div className="row mt-5" style={{ maxWidth: "400px" }}>
      <h4 className="text-center">Search by paring</h4>
      <div className="pb-3 mb-2 d-flex flex-row overflow-scroll">

        <div 
          onClick={handleParingClick}
          value="Vegetables"
          className="card vegetables small-wine-card m-2 py-4">
          <h4 className="text-center py-2">Vegetables</h4>
          <img className="veg" src={veg} alt="veg" />
        </div>

        <div 
          onClick={handleParingClick}
          value="Fish"
          className="card fish small-wine-card m-2 py-4">
          <h4 className="text-center py-2">Fish</h4>
          <img className="veg p-1" src={fish} alt="fish" />

        </div>

        <div 
          onClick={handleParingClick}
          value="Beef"
          className="card beef small-wine-card m-2 py-4">
          <h4 className="text-center py-2">Beef</h4>
          <img className="veg p-1" src={meat} alt="meat" />

        </div>

        <div 
          onClick={handleParingClick}
          value="Cheese"
          className="card cheese small-wine-card m-2 py-4">
          <h4 className="text-center py-2">Cheese</h4>
          <img className="veg p-1" src={cheese} alt="cheese" />
        </div>

        <div 
          onClick={handleParingClick}
          value="Seafood"
          className="card seafood small-wine-card m-2 py-4">
          <h4 className="text-center py-2">Seafood</h4>
          <img className="veg p-1" src={seafood} alt="seafood" />

        </div>

      </div>
    </div>
  )
}

export default Paring
