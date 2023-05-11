import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import defaultWine from '../images/WindeBottles/default-wine.png'
import rose from '../images/WindeBottles/rose.png'


function Recommendation(){
    const [recommendation, setRecommendation] =useState({})

    useEffect(() => {
        axios.get("http://localhost:5005/api/random-wine")
          .then((response) => {
            console.log("response.data", response.data)
            setRecommendation(response.data);
          })
      }, [])
  
      return (
        <>
            <h4 className='py-3'>Wine of the week</h4>
            <Link to={`/wine/${recommendation._id}`} style={{textDecoration: 'none'}}>
            <div className="row mt-4">
              <div className="recommendation-card card my-5 p-3 d-flex align-items-center">
                  <img className="wine-reccom-img"src={defaultWine} alt="wine bottle" />
                <div className='wine-reccom-text'>
                  <h1 className="">{recommendation?.name}</h1>
                  <p>{recommendation?.description}</p>
                </div>
              </div>
            </div> 
            </Link>
        </>
      );
}

export default Recommendation