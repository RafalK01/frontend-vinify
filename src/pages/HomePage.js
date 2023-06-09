import Countries from "../components/Countries"
import Featured from "../components/Featured"
import HeaderMain from "../components/HeaderMain"
import NavBar from "../components/Navbar"
import Paring from "../components/Paring"
import Recommendation from "../components/Recommendation"
import SearchQueryAndKind from "../components/SearchQueryAndKind"
import { useNavigate } from 'react-router-dom';


function HomePage({ setSearch }) {

  const wineSearch = ({ query, kind, origin, paring }) => {

    const searchParams = {}
    if (query) searchParams.query = query;
    if (kind) searchParams.kind = kind;
    if (origin) searchParams.origin = origin;
    if (paring) searchParams.paring = paring
 
    setSearch(searchParams)
    
  };

  return (
    <div className="home-page d-flex flex-column align-items-center">
      <HeaderMain />
      <SearchQueryAndKind wineSearch={wineSearch} />
      <Recommendation />
      <Featured />
      <Countries wineSearch={wineSearch} />
      <Paring wineSearch={wineSearch} />
      <NavBar />
    </div>
  )
}

export default HomePage
