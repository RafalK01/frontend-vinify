import country from '../images/DetailFilterIcons/location-svgrepo-com 2png.png'
// import region
// import taste
// import style
// import grape
import Navbar from '../components/Navbar'
import { useState, useEffect } from "react"
import axios from "axios"
import SmallWineCard from '../components/SmallWineCard'
import TopBackBar from '../components/TopBarBack'


function SearchResults({ search }) {

    const [searchResults, setSearchResults] =useState([])
    useEffect(() => {
        axios.get("http://localhost:5005/api/search-wine", { params: search })
          .then((response) => {
            setSearchResults(response.data);
          }) 
      }, [search])

      const [price, setPrice] = useState(0)
      function handlePriceChange(event) {
        setPrice(event.target.value);
      }
    
    return (

        <div className='search-results-page d-flex flex-column align-items-center'>

            <TopBackBar>
                <div>Search results</div>
            </TopBackBar>
         
            <div className="container"> 
                <p className="m-0">Estimated price ( € ) </p>
                <input 
                    className="w-100 slider" 
                    type="range"
                    min={0}
                    max={500}
                    step={10} 
                    value={price}
                    onInput={handlePriceChange} 
                    >
                </input>
                <div className="d-flex justify-content-between">
                    <p>0</p>
                    <p className="price-range">{price > 0 ? "+" + price: "+500"}</p>
                </div>
            </div>

            <div className="container filter-icons d-flex justify-content-between">

                <div className="card detail-filter-country detail-filter-icon d-flex justify-content-end">
                    <p className="text-center my-1">COUNTRY</p>
                </div>
                <div className="card detail-filter-region detail-filter-icon d-flex justify-content-end">
                    <p className="text-center my-1">REGION</p>
                </div>
                <div className="card detail-filter-taste detail-filter-icon d-flex justify-content-end">
                    <p className="text-center my-1">TASTE</p>
                </div>
                <div className="card detail-filter-style detail-filter-icon d-flex justify-content-end">
                    <p className="text-center my-1">STYLE</p>
                </div>
                <div className="card detail-filter-grape detail-filter-icon d-flex justify-content-end">
                    <p className="text-center my-1">GRAPE</p>
                </div>


            </div>

            <div className="w-100 text-end p-3">Sort by ▼ </div>

            <div className='container d-flex flex-wrap justify-content-evenly'>
            {searchResults?.map(wine => (
                    <SmallWineCard key={wine._id} wine={wine}/>
            ))}
            </div>
            <Navbar />
        </div>

    )
}

export default SearchResults