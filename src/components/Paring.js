import { useState } from "react"

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
        </div>

        <div 
          onClick={handleParingClick}
          value="Fish"
          className="card fish small-wine-card m-2 py-4">
          <h4 className="text-center py-2">Fish</h4>
        </div>

        <div 
          onClick={handleParingClick}
          value="Beef"
          className="card beef small-wine-card m-2 py-4">
          <h4 className="text-center py-2">Beef</h4>
        </div>

        <div 
          onClick={handleParingClick}
          value="Cheese"
          className="card cheese small-wine-card m-2 py-4">
          <h4 className="text-center py-2">Cheese</h4>
        </div>

        <div 
          onClick={handleParingClick}
          value="Seafood"
          className="card seafood small-wine-card m-2 py-4">
          <h4 className="text-center py-2">Seafood</h4>
        </div>

      </div>
    </div>
  )
}

export default Paring
