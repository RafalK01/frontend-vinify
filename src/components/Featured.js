import wine from '../images/WindeBottles/default-wine.png'
import rose from '../images/WindeBottles/rose.png'
import white from '../images/WindeBottles/white.png'
import champ from '../images/WindeBottles/chapm.png'

import shapeBookmark from '../images/NavIcons/Shape-bookmark.png'




function Featured(){
    return(
     <div className="row mt-1" style={{maxWidth: '400px'}}>
      <h4 className='text-center'>Featured for you</h4>

        <div className="mb-2 d-flex flex-row overflow-scroll">

            <div className="card small-wine-card m-2 px-2 f-flex flex-row justify-content-between align-items-between">
                <div className="d-flex align-items-center">
                    <img className="mx-2" src={rose} alt="wine" />
                </div>
                <div>
                    <div className="text-end">
                        <img className="wineCardBookmark" src={shapeBookmark} alt="bookmark" />
                    </div>
                    <h5>Pillar</h5>
                    <p>Flowery rose from France...</p>
                </div>
            </div>
            <div className="card small-wine-card m-2 px-2 f-flex flex-row justify-content-between align-items-between">
                <div className="d-flex align-items-center">
                    <img className="mx-2" src={white} alt="wine" />
                </div>
                <div>
                    <div className="text-end">
                        <img className="wineCardBookmark" src={shapeBookmark} alt="bookmark" />
                    </div>
                    <h5>Pillar</h5>
                    <p>White Wine from Spain...</p>
                </div>
            </div>
            <div className="card small-wine-card m-2 px-2 f-flex flex-row justify-content-between align-items-between">
                <div className="d-flex align-items-center">
                    <img className="mx-2" src={champ} alt="wine" />
                </div>
                <div>
                    <div className="text-end">
                        <img className="wineCardBookmark" src={shapeBookmark} alt="bookmark" />
                    </div>
                    <h5>Lanson</h5>
                    <p>White Limited edition old vines</p>
                </div>
            </div>
            <div className="card small-wine-card m-2 px-2 f-flex flex-row justify-content-between align-items-between">
                <div className="d-flex align-items-center">
                    <img className="mx-2" src={rose} alt="wine" />
                </div>
                <div>
                    <div className="text-end">
                        <img className="wineCardBookmark" src={shapeBookmark} alt="bookmark" />
                    </div>
                    <h5>Albarino Baixas</h5>
                    <p>White Limited edition old vines</p>
                </div>
            </div>

        </div>
     </div>
    )
}

export default Featured