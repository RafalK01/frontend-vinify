/* eslint-disable react-hooks/exhaustive-deps */
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import WineDetail from "./pages/WineDetail";
import SearchResults from "./pages/SearchResults";
import LikedWines from "./pages/LikedWines";
import UserProfile from "./pages/UserProfile";
import Support from "./pages/Support";

function App() {

  const [search, setSearch ] = useState()
  const navigate = useNavigate()

  useEffect(()=> {
    if(search){
      navigate('/search')
    }
  }, [search])



  return (
    <div className="App col">

          <Routes>
             <Route path="/signup" element={<SignupPage />} />
             <Route path="/login" element={<LoginPage />} />
             <Route path="/" element={<HomePage setSearch={setSearch}/>} />
             <Route path="/search" element={<SearchResults search={search} />} />
             <Route path="/wine/:wineId" element={<WineDetail />}/>
             <Route path="/liked" element={<LikedWines />} />
             <Route path="/profile" element={<UserProfile />} />
             <Route path="/support" element={<Support />} />
          </Routes>    
 
    </div>
  );
}

export default App;
