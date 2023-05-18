import wine from '../images/WindeBottles/default-wine.png'
import rose from '../images/WindeBottles/rose2.png'
import white from '../images/WindeBottles/white2.png'
import champ from '../images/WindeBottles/chapm.png'

import shapeBookmark from '../images/NavIcons/Shape-bookmark.png'




function Featured(){
    return(
     <div className="row mt-1" style={{maxWidth: '400px'}}>
      <h4 className='text-center'>Featured for you</h4>

        <div className="mb-2 d-flex flex-row overflow-scroll">

            <div className="card small-wine-card m-2 px-2 f-flex flex-row justify-content-between align-items-between">
                <div className="d-flex align-items-center">
                    <img className="small-wine-image mx-2" src={rose} alt="wine" />
                </div>
                <div>
                    <div className="text-end">
                        <img className="wineCardBookmark" src={shapeBookmark} alt="bookmark" />
                    </div>
                    <h5>Blissful Breeze</h5>
                    <p>Refreshing tropical fruit medley....</p>
                </div>
            </div>
            <div className="card small-wine-card m-2 px-2 f-flex flex-row justify-content-between align-items-between">
                <div className="d-flex align-items-center">
                    <img className="mx-2 small-wine-image" src={white} alt="wine" />
                </div>
                <div>
                    <div className="text-end">
                        <img className="wineCardBookmark" src={shapeBookmark} alt="bookmark" />
                    </div>
                    <h5>Crims Elixir</h5>
                    <p>Velvety dark berry infusion....</p>
                </div>
            </div>
            <div className="card small-wine-card m-2 px-2 f-flex flex-row justify-content-between align-items-between">
                <div className="d-flex align-items-center">
                    <img className="small-wine-image mx-2" src={rose} alt="wine" />
                </div>
                <div>
                    <div className="text-end">
                        <img className="wineCardBookmark" src={shapeBookmark} alt="bookmark" />
                    </div>
                    <h5>Spark Ember</h5>
                    <p>Vibrant citrus with fiery effervesc...</p>
                </div>
            </div>
            <div className="card small-wine-card m-2 px-2 f-flex flex-row justify-content-between align-items-between">
                <div className="d-flex align-items-center">
                    <img className="small-wine-image mx-2" src={white} alt="wine" />
                </div>
                <div>
                    <div className="text-end">
                        <img className="wineCardBookmark" src={shapeBookmark} alt="bookmark" />
                    </div>
                    <h5>Abarino Baixas</h5>
                    <p>White Limited edition old vin..</p>
                </div>
            </div>

        </div>
     </div>
    )
}

export default Featured