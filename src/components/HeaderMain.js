import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "./../context/auth.context"
import defaultProfilePicture from '../images/default-profile-picture.png'

function HeaderMain() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);



    return (
      <div className="header-main d-flex flex-column align-items-center mt-5">
        <h1>VINIFY</h1>
        <div className="user-welcome-row d-flex justify-content-around">
          <img className=""src={defaultProfilePicture} alt="profile" />
          <p>Welcome {user && user.name}!</p>
          <a href="/settings">Settings</a>
        </div>
      </div>
    )
  }
  
  export default HeaderMain