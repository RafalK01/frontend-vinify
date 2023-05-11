import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
        <Link to={`/wine/${recommendation?._id}`}>
            <div className="card my-5 p-3">
            <h1>{recommendation?.name}</h1>
            <p>{recommendation?.description}</p>
            </div>
        </Link>
    )
}

export default Recommendation