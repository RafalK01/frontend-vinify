import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "./../context/auth.context"
import defaultProfilePicture from '../images/default-profile-picture.png'
import settingsIcon from '../images/settingsIcon.png'

function HeaderMain() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);



    return (
      <div className="mt-4 row w-100 px-2">
        <h1 className="vinify font-weight-bold text-center">VINIFY</h1>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <img className="user-profile-picture"src={defaultProfilePicture} alt="profile" />
            <p className="welcome-text mb-0 px-3">Welcome {user && user.name}!</p>
          </div>  
          <a href="/settings"><img src={settingsIcon}/></a>
        </div>
      </div>
    )
  }
  
  export default HeaderMain