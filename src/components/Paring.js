import { useState } from "react"

function Paring({ wineSearch }) {
  const [searchParing, setSearchParing] = useState("")

    // search wines by food pairing
    const handleParingClick = async (e) => {
      const selectedFood = e.target.getAttribute("value")
      setSearchParing(selectedFood)
      try {
        await wineSearch({ paring: searchParing })
      } catch (error) {
        console.log(error)
      }
    }

  return (
    <div className="row mt-5" style={{ maxWidth: "400px" }}>
      <h4 className="text-center">Search by paring</h4>
      <div className="pb-3 mb-2 d-flex flex-row overflow-scroll">

        <div 
          onClick={handleParingClick}
          value="vegetables"
          className="card vegetables featured-card m-2 py-4">
          <h4 className="text-center py-2">Vegetables</h4>
        </div>

        <div 
          onClick={handleParingClick}
          value="fish"
          className="card fish featured-card m-2 py-4">
          <h4 className="text-center py-2">Fish</h4>
        </div>

        <div 
          onClick={handleParingClick}
          value="beef"
          className="card beef featured-card m-2 py-4">
          <h4 className="text-center py-2">Beef</h4>
        </div>

        <div 
          onClick={handleParingClick}
          value="cheese"
          className="card cheese featured-card m-2 py-4">
          <h4 className="text-center py-2">Cheese</h4>
        </div>

        <div 
          onClick={handleParingClick}
          value="seafood"
          className="card seafood featured-card m-2 py-4">
          <h4 className="text-center py-2">Seafood</h4>
        </div>

      </div>
    </div>
  )
}

export default Paring
