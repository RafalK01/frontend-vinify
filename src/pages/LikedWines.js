import Navbar from '../components/Navbar'
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from '../context/auth.context'
import SmallWineCard from '../components/SmallWineCard';
import TopBackBar from '../components/TopBarBack';

function LikedWines() {
    const { user } = useContext(AuthContext)
    const [likedWines, setLikedWines] = useState([])
    

    
    useEffect(() => {
        if (user && user._id) {
          axios.get(`http://localhost:5005/api/user/${user._id}`)
            .then((response) => {
                setLikedWines(response.data.wineList)
            })
        } 
      }, [user])
    
    return (
        <div className="liked-wines d-flex flex-column align-items-center">
              <TopBackBar>
                <div>My liked wines</div>
              </TopBackBar>

            <div className='container d-flex flex-wrap justify-content-evenly'>
                {likedWines?.map(wine => (
                        <SmallWineCard key={wine._id} wine={wine}/>
                ))}
            </div>
         
            <Navbar />
        </div>
    )
}

export default LikedWines