import { useParams } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
import NavBar from "../components/Navbar"
import TopBackBar from "../components/TopBarBack"


function WineDetail(){
    const [wine, setWine] = useState({})
    const { wineId } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:5005/api/wine/${wineId}`)
        .then((response) => {
            setWine(response.data);
          })
      }, [wineId])

    return (

        <div className="wine-detail d-flex flex-column align-items-center">
         <TopBackBar>
                <div>{wine.name}</div>
        </TopBackBar>


        <div className="contain">
            <h5>Primary flavours</h5>
        </div>

        {/* CHANGE THE PICTURES AND STY:ES */}
        <div className="container filter-icons d-flex justify-content-between">

                <div className="card detail-filter-country detail-filter-icon d-flex justify-content-end">
                    <p className="text-center my-1">Lemon</p>
                </div>
                <div className="card detail-filter-region detail-filter-icon d-flex justify-content-end">
                    <p className="text-center my-1">Peach</p>
                </div>
                <div className="card detail-filter-taste detail-filter-icon d-flex justify-content-end">
                    <p className="text-center my-1">Grapefruit</p>
                </div>
                <div className="card detail-filter-style detail-filter-icon d-flex justify-content-end">
                    <p className="text-center my-1">Honeymelon</p>
                </div>
                <div className="card detail-filter-grape detail-filter-icon d-flex justify-content-end">
                    <p className="text-center my-1">Salty</p>
                </div>
        </div>

        <p className="p-3 w-100 text-end" >{Math.floor(Math.random() * (100 - 60 + 1)) + 50}% match</p>

        <div className="container">
            <h5 className="text-center">Wine information</h5>
            <div className="card p-3 wine-info-card">
                <p><span>{wine.name}:</span></p>
                <p>{wine.description}</p>
            </div>
        </div>

        <div className="container py-5">
            <h5 className="text-center">Paring</h5>

        {/* CHANGE THE PICTURES AND STY:ES */}
            <div className="container filter-icons d-flex justify-content-between">

                <div className="card detail-filter-country detail-filter-icon d-flex justify-content-end">
                    <p className="text-center my-1">Lemon</p>
                </div>
                <div className="card detail-filter-region detail-filter-icon d-flex justify-content-end">
                    <p className="text-center my-1">Peach</p>
                </div>
                <div className="card detail-filter-taste detail-filter-icon d-flex justify-content-end">
                    <p className="text-center my-1">Grapefruit</p>
                </div>
                <div className="card detail-filter-style detail-filter-icon d-flex justify-content-end">
                    <p className="text-center my-1">Honeymelon</p>
                </div>
                <div className="card detail-filter-grape detail-filter-icon d-flex justify-content-end">
                    <p className="text-center my-1">Salty</p>
                </div>
        </div>

            <div className="mt-4 card p-3 wine-info-card">
                <p><span>{wine.pairingInfo}:</span></p>
                <p>{wine.description}</p>
            </div>
        </div>

        <div className="container pb-5">
            <div className="card p-3 wine-info-card">
                <h5 className="m-0">Estimated price: {wine.price} Euros</h5>
            </div>
        </div>

        <NavBar />
        </div>
    )
}

export default WineDetail
