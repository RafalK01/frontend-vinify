import {useNavigate} from 'react-router-dom';


function TopBackBar({ children }){

    const navigate = useNavigate();

    function goBack(){
        console.log("back")
        navigate(-1)
    }

    return (
        <div className="w-100 top-bar-back d-flex p-4">
            <div className="back-icon">  ＜ </div>
            <div onClick={goBack} className="top-text text-center w-100">{children}</div>
        </div>

    )
}

export default TopBackBar