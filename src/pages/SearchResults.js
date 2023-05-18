import country from '../images/DetailFilterIcons/country2.png'
import region from '../images/DetailFilterIcons/region.png'
import taste from '../images/DetailFilterIcons/taste.png'
import style from '../images/DetailFilterIcons/style.png'
import grape from '../images/DetailFilterIcons/grape.png'
import downArrow from '../images/NavIcons/down-arrow.png'

import Navbar from '../components/Navbar'
import { useState, useEffect } from "react"
import axios from "axios"
import SmallWineCard from '../components/SmallWineCard'
import TopBackBar from '../components/TopBarBack'

const REACT_APP_API_URL = process.env.REACT_APP_API_URL



function SearchResults({ search }) {

    const [searchResults, setSearchResults] =useState([])
    useEffect(() => {
        axios.get(REACT_APP_API_URL, { params: search })
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
                <div className="detail-filter-icon d-flex">
                    <img src={country} alt="country" />
                    <img src={region} alt="country" />
                    <img src={taste} alt="country" />
                    <img src={style} alt="country" />
                    <img src={grape} alt="country" />
                </div>

            </div>


            <div className="w-100 text-end p-3">Sort by <span><img className="sort-arrow" src={downArrow} alt="sort" /></span></div>

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