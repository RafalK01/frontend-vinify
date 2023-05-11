import home from '../images/NavIcons/home.png'
import bookmark from '../images/NavIcons/bookmark.png'
import camera from '../images/NavIcons/🦆 icon _camera_png.png'
import community from '../images/NavIcons/community.png'
import profile from '../images/NavIcons/profile.png'

function NavBar() {
    return (
        <div className="nav-bar d-flex justify-content-around align-items-center">
          <a className="px-3 text-center" href='/'>
            <img src={home} alt="home button" />
            <p>HOME</p>
          </a>
          <a className="text-center" href='/wine-list'>
            <img src={bookmark} alt="bookmark button" />
            <p>WINE LIST</p>
          </a>
          <a href="/add" className="camera-button p-3 text-center">
            <img src={camera} alt="add wine button" />
          </a>
          <a className="text-center" href='/community'>
            <img src={community} alt="support button" />
            <p>SUPPORT</p>
          </a>
          <a className="px-3 text-center" href='/profile'>
            <img src={profile} alt="profile button" />
            <p>PROFILE</p>
          </a>
        </div>
    )
  }
  
  export default NavBar