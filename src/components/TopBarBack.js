import {useNavigate} from 'react-router-dom';
import backIcon from '../images/NavIcons/chevron-left.png'

function TopBackBar({ children }){

    const navigate = useNavigate();

    function goBack(){
        navigate(-1)
    }

    return (
        <div className="w-100 top-bar-back d-flex p-4">
            <img className="back-icon" src={backIcon} alt="back button" />
            <div onClick={goBack} className="top-text text-center w-100">{children}</div>
        </div>

    )
}

export default TopBackBar