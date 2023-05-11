import HeaderMain from "../components/HeaderMain";
import NavBar from "../components/Navbar";
import Recommendation from "../components/Recommendation";
import SearchQueryAndKind from '../components/SearchQueryAndKind'

function HomePage() {
    return (
      <div className="home-page">
        <HeaderMain />
        <SearchQueryAndKind />
        <Recommendation />
        <NavBar />
      </div>
    )
  }
  
  export default HomePage;