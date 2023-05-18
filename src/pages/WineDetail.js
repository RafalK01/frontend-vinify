import { useParams } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
import NavBar from "../components/Navbar"
import TopBackBar from "../components/TopBarBack"
import lemon from '../images/Flavours/lemon-svgrepo-com (1) 1lemon (1).png'
import peach from '../images/Flavours/peach-svgrepo-com (2) 1peach (1).png'
import grapefruit from '../images/Flavours/orange-svgrepo-com (1) 1grapefruit (1).png'
import melon from '../images/Flavours/melon-svgrepo-com (1) 1melon (1).png'
import salt from '../images/Flavours/salt-svgrepo-com (1) 1salt (1).png'
import wineStats from '../images/Flavours/White card.png';
import fish from '../images/ParingIcons/SmallPairngIcons/fish-svgrepo-com 1.png'
import meat from '../images/ParingIcons/SmallPairngIcons/meat-on-the-bone-1-svgrepo-com 1.png'
import veg from '../images/ParingIcons/SmallPairngIcons/bell-pepper-svgrepo-com 1.png'
import seafood from '../images/ParingIcons/SmallPairngIcons/reshot-icon-crab-6DLGZ5Q3EF 1.png'
import cheese from '../images/ParingIcons/SmallPairngIcons/reshot-icon-cheese-5FDLGPV2JE 1.png'

const REACT_APP_API_URL = process.env.REACT_APP_API_URL


function WineDetail(){
    const [wine, setWine] = useState({})
    const { wineId } = useParams()

    useEffect(() => {
        axios.get(`${REACT_APP_API_URL}/api/wine/${wineId}`)
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
        <div className="filter-icons d-flex pt-2 w-100 justify-content-evenly">

                <div className="d-flex flex-column justify-content-center align-items-center">
                    <img className="flavour-img" src={lemon} alt="" />
                    <p className="text-center my-1 flavour">Lemon</p>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <img className="flavour-img" src={peach} alt="" />
                    <p className="text-center my-1 flavour">Lemon</p>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <img className="flavour-img" src={grapefruit} alt="" />
                    <p className="text-center my-1 flavour">Lemon</p>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <img className="flavour-img" src={melon} alt="" />
                    <p className="text-center my-1 flavour">Lemon</p>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <img className="flavour-img" src={salt} alt="" />
                    <p className="text-center my-1 flavour">Lemon</p>
                </div>
        </div>

        <p className="m-0 pt-3 px-3 w-100 text-end" >{Math.floor(Math.random() * (100 - 60 + 1)) + 50}% match</p>

        <div className="wine-stats">
            <img src={wineStats} alt="wine-stats" />
        </div>

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
        <div className="filter-icons d-flex pt-2 w-100 justify-content-evenly">

                <div className="d-flex flex-column justify-content-center align-items-center">
                    <img className="flavour-img" src={fish} alt="" />
                    <p className="text-center my-1 flavour">Fish</p>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <img className="flavour-img" src={meat} alt="" />
                    <p className="text-center my-1 flavour">Meat</p>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <img className="flavour-img" src={veg} alt="" />
                    <p className="text-center my-1 flavour">Vegetables</p>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <img className="flavour-img" src={seafood} alt="" />
                    <p className="text-center my-1 flavour">Seafood</p>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <img className="flavour-img" src={cheese} alt="" />
                    <p className="text-center my-1 flavour">Cheese</p>
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
