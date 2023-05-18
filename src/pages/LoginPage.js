import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./../context/auth.context";
import authService from "./../services/auth.service";



function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    // axios.post(`${API_URL}/auth/login`, requestBody

    authService.login(requestBody)
      .then((response) => {
        console.log("JWT token", response.data.authToken);
        
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
      	const errorDescription = error.response.data.message;
      	setErrorMessage(errorDescription);
    	})
  };
  
  return (
    <div className="login-page">
      
      <h1 className="pb-4 vinify text-center">VINIFY</h1>

      <div className="card signup-card">

        <form className="p-5 signup-form" onSubmit={handleLoginSubmit}>
          <label className="form-label m-1">Email:</label>
          <input className="form-control auth-input" type="email" name="email" value={email} onChange={handleEmail} />

          <label className="form-label m-1">Password:</label>
          <input className="form-control auth-input"type="password" name="password" value={password} onChange={handlePassword} />

          <button className="btn green-button m-3 px-4" type="submit">Login</button>
        </form>
        {errorMessage && <p className="text-center error-message">{errorMessage}</p> }

      </div>  

      <p className="pt-4 pb-2">Don't have an account?</p>
      <Link className="btn white-button px-3" to={"/signup"}> Sign up</Link>
    </div>
  )
}

export default LoginPage;