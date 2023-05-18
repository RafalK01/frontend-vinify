import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "./../context/auth.context"
import defaultProfilePicture from '../images/default-profile-picture.png'
import RafalProfilePic from '../images/RafalProfilePic.png'

import settingsIcon from '../images/settings.png'

function HeaderMain() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);



    return (
      <div className="mt-4 row px-2">
        <h1 className="vinify text-center">VINIFY</h1>
        { user && <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
          <div className="profile-picture-small">
            <img className="" src={RafalProfilePic} alt="profile" />
          </div>
            <p className="welcome-text mb-0 px-3">Welcome{user && " " + user.name}!</p>
          </div>  
          <a href="/settings"><img className="settings-icon"src={settingsIcon}/></a>
        </div>}
      </div>
    )
  }
  
  export default HeaderMain