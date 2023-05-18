import magnifyingGlass from "../images/magnifier.png"
import Natural from "../images/WineKindIcons/Natural winepng (1).png"
import Red from "../images/WineKindIcons/Red winered png.png"
import Rose from "../images/WineKindIcons/Rosépng (1).png"
import Sparkling from "../images/WineKindIcons/Sparklingpng.png"
import White from "../images/WineKindIcons/White winepng.png"
import { useState } from "react"



function SearchQueryAndKind({ wineSearch }) {
  const [searchQuery, setSearchQuery] = useState("")

  // searches by query typed in the form
  const handleQuerySearch = () => {
    if(searchQuery){
      wineSearch({ query: searchQuery})
    }
    setSearchQuery("")
  }

   const handleKindClick = (e) => {
    const selectedKind = e.target.getAttribute("value")
    wineSearch({ kind: selectedKind })
  }

  return (
    <div className="row  m-0 p-0">
      <div className="input-group my-3 mx-0 px-4">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          className="form-control search-input"
          placeholder="Search..."
        />
        <button
          onClick={handleQuerySearch}
          className="btn search-btn"
          type="button"
          id="button-addon2"
        >
          <img className="magnifier"src={magnifyingGlass} alt="magnifyingGlass" />
        </button>
      </div>

      <div
        className="mb-2 d-flex overflow-scroll wine-kind-filter"
        style={{ maxWidth: "400px" }}
      >
        <img
          onClick={handleQuerySearch}
          value="Natural"
          src={Natural}
          alt="Natural"
        />
        <img 
          onClick={handleKindClick} 
          value="Red" 
          src={Red} 
          alt="Red" />
        <img
          onClick={handleKindClick}
          value="White"
          className="px-3"
          src={White}
          alt="White"
        />  
        <img 
          onClick={handleKindClick} 
          value="Rose" 
          src={Rose} 
          alt="Rose" />
        
        <img
          onClick={handleKindClick}
          value="Sparkling"
          className="px-3"
          src={Sparkling}
          alt="Sparkling"
        />
      </div>
    </div>
  )
}

export default SearchQueryAndKind
