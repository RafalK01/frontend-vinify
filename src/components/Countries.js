import { useState } from "react"


function Countries({ wineSearch }) {
  const [searchCountry, setSearchCountry] = useState("")

  // search wines by origin
  const handleCountryClick = (e) => {
    const selectedCountry = e.target.getAttribute("value")
    wineSearch({ origin: selectedCountry})
  }

  return (
    <div className="row mt-5" style={{ maxWidth: "400px" }}>
      <h4 className="text-center">Search by countries</h4>
      <div className="mb-2 d-flex flex-row overflow-scroll">
        <div
          onClick={handleCountryClick}
          value="Australia"
          className="card australia small-wine-card m-2 py-4"
        >
          <h4 className="text-center py-2">Australia</h4>
        </div>

        <div
          onClick={handleCountryClick}
          value="France"
          className="card france small-wine-card m-2 py-4"
        >
          <h4 className="text-center py-2">France</h4>
        </div>

        <div
          onClick={handleCountryClick}
          value="Portugal"
          className="card portugal small-wine-card m-2 py-4"
        >
          <h4 className="text-center py-2">Portugal</h4>
        </div>

        <div
          onClick={handleCountryClick}
          value="Spain"
          className="card spain small-wine-card m-2 py-4"
        >
          <h4 className="text-center py-2">Spain</h4>
        </div>

        <div
          onClick={handleCountryClick}
          value="Italy"
          className="card italy small-wine-card m-2 py-4"
        >
          <h4 className="text-center py-2">Italy</h4>
        </div>
      </div>
    </div>
  )
}

export default Countries
