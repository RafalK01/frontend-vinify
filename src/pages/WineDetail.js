import { useParams } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"


function WineDetail(){
    const [wine, setWine] = useState({})
    const { wineId } = useParams()

    useEffect(() => {
        console.log(wineId)
        axios.get(`http://localhost:5005/api/wine/${wineId}`)
        .then((response) => {
            console.log("response.data", response.data)
            setWine(response.data);
          })
      }, [wineId])

    return (
        <>
            <h1>{wine.name}</h1>
            <h2>{wine.description}</h2>
        </>
    )
}

export default WineDetail
