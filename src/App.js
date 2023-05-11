import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import WineDetail from "./pages/WineDetail";

function App() {
  return (
    <div className="App col">

          <Routes>
             <Route path="/" element={<HomePage />} />
             <Route path="/signup" element={<SignupPage />} />
             <Route path="/login" element={<LoginPage />} />
             <Route path="/wine/:wineId" element={<WineDetail />}/>
          </Routes>    
 
    </div>
  );
}

export default App;
