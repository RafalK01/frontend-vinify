import { useState } from "react"

function Countries({ wineSearch }) {
  const [searchCountry, setSearchCountry] = useState("")

  // search wines by origin
  const handleCountryClick = async (e) => {
    const selectedCountry = e.target.getAttribute("value")
    setSearchCountry(selectedCountry)
    try {
      await wineSearch({ origin: searchCountry })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="row mt-5" style={{ maxWidth: "400px" }}>
      <h4 className="text-center">Search by countries</h4>
      <div className="mb-2 d-flex flex-row overflow-scroll">
        <div
          onClick={handleCountryClick}
          value="australia"
          className="card australia featured-card m-2 py-4"
        >
          <h4 className="text-center py-2">Australia</h4>
        </div>

        <div
          onClick={handleCountryClick}
          value="france"
          className="card france featured-card m-2 py-4"
        >
          <h4 className="text-center py-2">France</h4>
        </div>

        <div
          onClick={handleCountryClick}
          value="portugal"
          className="card portugal featured-card m-2 py-4"
        >
          <h4 className="text-center py-2">Portugal</h4>
        </div>

        <div
          onClick={handleCountryClick}
          value="spain"
          className="card spain featured-card m-2 py-4"
        >
          <h4 className="text-center py-2">Spain</h4>
        </div>

        <div
          onClick={handleCountryClick}
          value="italy"
          className="card italy featured-card m-2 py-4"
        >
          <h4 className="text-center py-2">Italy</h4>
        </div>
      </div>
    </div>
  )
}

export default Countries
