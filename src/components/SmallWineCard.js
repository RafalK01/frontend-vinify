import { useContext } from "react";
import axios from "axios";
import { AuthContext } from '../context/auth.context'


import rose from '../images/WindeBottles/rose.png'

function SmallWineCard({wine}) {

    const { user } = useContext(AuthContext)

      function unpdateWineList(id) {
        axios.post(`http://localhost:5005/api/user/${user._id}`, { likedWine: id } )
        .then((response) => {
          console.log(response.data);
        })
      }
  
    return(
      <div className="small-wine-card card m-2">
        <div onClick={()=>unpdateWineList(wine._id)} className="text-end pt-2 px-2">📎</div>
          <div className="d-flex">
           <img className="mx-2" src={rose} alt="wine" />
           <div className="m-2">
             <a href ={`/wine/${wine._id}`} >
              <h5 className="small-card-name">{wine.name.split(' ').slice(0, 3).join(' ')}</h5>
             </a>
             <p className="">{wine.headline.split(' ').slice(0, 6).join(' ') + "..."}</p>
            </div>
        </div>
      </div>      
    )
}

export default SmallWineCard