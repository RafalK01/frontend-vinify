import NavBar from "../components/Navbar"
import TopBackBar from '../components/TopBarBack'
import { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import RafalProfilePic from '../images/RafalProfilePic.png'
import { AuthContext } from '../context/auth.context'

const REACT_APP_API_URL = process.env.REACT_APP_API_URL

function UserProfile() {
    const { user, logOutUser, authenticateUser  } = useContext(AuthContext) 
    const navigate = useNavigate()

    function handleLogout(){
        console.log("login")
        logOutUser()
        navigate('/login')
    }

    const [editing, setEditing] = useState(false);

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);

    const handleEditStart = () => {
      setEditing(true);
    };
  
    const handleSaveClick = () => {

        const newData = {}
      if (name) newData.newName = name
      if (email) newData.newEmail = email

    axios.post(`${REACT_APP_API_URL}/api/user/${user._id}`, { newData } )
        .then((response) => {
            setName(null)
            setEmail(null)
        })

        setEditing(false);
        authenticateUser()

    };

    return (
        <div className="profile">

            <TopBackBar>
                <div>Profile</div>
            </TopBackBar>
            
            <div className="profile-content d-flex flex-column align-items-center justify-content-between">  

                    {user && 
                        <div className="profile-picture mt-3">
                            <img className="" src={RafalProfilePic} alt="profile" />
                        </div>
                    }

                    <div className="text-center w-100 d-flex flex column justify-content-center">
                        {(editing) ? (
                            <form className="input-group d-flex flex-column w-75">
                               <input className="form-control w-100 m-2 text-center" type="text" value={name === null ? user?.name : name} onChange={(e) => setName(e.target.value)} /> 
                               <input className="form-control w-100 m-2 text-center" type="text" value={email === null ? user?.email : email} onChange={(e) => setEmail(e.target.value)} />
                            </form>
                        ) : (
                            <div>
                                <p>{user?.name }</p>
                                <p>{user?.email}</p>
                            </div>
                        )}
                    </div>  
                {user ? (
                    <div className="w-75 d-flex flex-column">
                         <button onClick={editing ? handleSaveClick : handleEditStart} className="btn white-button m-2">{editing ? "Save" : "Edit profile"}</button>
                         <button onClick={handleLogout} className="btn green-button m-2">Log out</button>
                    </div> 

                ) : (
                    <div className="w-75 d-flex flex-column">
                         <button onClick={() => navigate('/login')} className="btn green-button m-2">Log in</button>
                         <button onClick={() => navigate('/signup')} className="btn white-button m-2">Sign up</button>
                    </div> 
                )
                }      

            </div>


             <NavBar />
        </div>
    )
}

export default UserProfile

