import Countries from "../components/Countries"
import Featured from "../components/Featured"
import HeaderMain from "../components/HeaderMain"
import NavBar from "../components/Navbar"
import Paring from "../components/Paring"
import Recommendation from "../components/Recommendation"
import SearchQueryAndKind from "../components/SearchQueryAndKind"

function HomePage() {
  const wineSearch = ({ query, kind, origin, paring }) => {
    const searchParams = {}

    if (query) searchParams.query = query;
    if (kind) searchParams.kind = kind;
    if (origin) searchParams.origin = origin;
    if (paring) searchParams.paring = paring;
 


    // CALL MY API AND FILTER
    console.log(searchParams)

  };

  return (
    <div className="home-page d-flex flex-column align-items-center overflow-x-scroll">
      <HeaderMain />
      <SearchQueryAndKind wineSearch={wineSearch} />
      <Recommendation />
      <Featured />
      <Countries wineSearch={wineSearch} />
      <Paring wineSearch={wineSearch} />
      <NavBar />
    </div>
  );
}

export default HomePage
