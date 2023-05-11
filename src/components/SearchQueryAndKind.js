import magnifyingGlass from "../images/magnifyingGlass.png"
import Natural from "../images/WineKindIcons/Natural winepng.png"
import Red from "../images/WineKindIcons/Red winepng.png"
import Rose from "../images/WineKindIcons/Rosépng.png"
import Sparkling from "../images/WineKindIcons/Sparklingpng.png"
import White from "../images/WineKindIcons/White winepng.png"
import { useState } from "react"

function SearchQueryAndKind({ wineSearch }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchKind, setSearchKind] = useState("")

  // searches by query typed in the form
  const handleQuerySearch = () => {
    wineSearch({
      query: searchQuery,
    });
    setSearchQuery("")
  };

  // searches by kind of wine
  const handleKindClick = async (e) => {
    const selectedKind = e.target.getAttribute("value")
    setSearchKind(selectedKind)
    try {
      await wineSearch({ kind: searchKind })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="row px-3">
      <div className="input-group my-3 px-4">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Search..."
        />
        <button
          onClick={handleQuerySearch}
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          <img src={magnifyingGlass} alt="magnifyingGlass" />
        </button>
      </div>
      <div
        className="mb-2 d-flex overflow-scroll"
        style={{ maxWidth: "400px" }}
      >
        <img
          onClick={handleKindClick}
          value="natural"
          src={Natural}
          alt="Natural"
        />
        <img onClick={handleKindClick} value="red" src={Red} alt="Red" />
        <img onClick={handleKindClick} value="rose" src={Rose} alt="Rose" />
        <img
          onClick={handleKindClick}
          value="sparkling"
          className="px-3"
          src={Sparkling}
          alt="Sparkling"
        />
        <img
          onClick={handleKindClick}
          value="white"
          className="px-3"
          src={White}
          alt="Natural"
        />
      </div>
    </div>
  )
}

export default SearchQueryAndKind
