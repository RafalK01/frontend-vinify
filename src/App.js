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
import IsPrivate from "./components/IsPrivate";

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
             <Route path="/search" element={<IsPrivate><SearchResults search={search} /></IsPrivate>} />
             <Route path="/wine/:wineId" element={<IsPrivate><WineDetail /></IsPrivate>}/>
             <Route path="/liked" element={<IsPrivate><LikedWines /></IsPrivate>} />
             <Route path="/profile" element={<UserProfile />} />
             <Route path="/support" element={<IsPrivate><Support /></IsPrivate>} />
          </Routes>    
 
    </div>
  );
}

export default App;
