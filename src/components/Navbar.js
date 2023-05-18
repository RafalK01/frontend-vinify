import home from '../images/NavIcons/house-chimney-1.png'
import bookmark from '../images/NavIcons/Bookmarks.png'
import camera from '../images/NavIcons/camera.png'
import support from '../images/NavIcons/support.png'
import profile from '../images/NavIcons/profile.png'

function NavBar() {
    return (
        <div className="nav-bar d-flex justify-content-around align-items-center">
          <a className="px-3 text-center" href='/'>
            <img className="nav-icons"src={home} alt="home button" />
            <p>HOME</p>
          </a>
          <a className="text-center" href='/liked'>
            <img className="nav-icons" src={bookmark} alt="bookmark button" />
            <p>WINE LIST</p>
          </a>
          <a href="/add" className="camera-button p-3 text-center">
            <img src={camera} alt="add wine button" />
          </a>
          <a className="text-center" href='/support'>
            <img className="nav-icons" src={support} alt="support button" />
            <p>SUPPORT</p>
          </a>
          <a className="px-3 text-center" href='/profile'>
            <img className="nav-icons" src={profile} alt="profile button" />
            <p>PROFILE</p>
          </a>
        </div>
    )
  }
  
  export default NavBar