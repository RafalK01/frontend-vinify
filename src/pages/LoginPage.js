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
    <div className="LoginPage">
      
      <h1>VINIFY</h1>

      <div className="card signup-card">

        <form className="p-5 signup-form" onSubmit={handleLoginSubmit}>
          <label className="form-label">Email:</label>
          <input className="form-control" type="email" name="email" value={email} onChange={handleEmail} />

          <label className="form-label">Password:</label>
          <input className="form-control"type="password" name="password" value={password} onChange={handlePassword} />

          <button className="btn btn-primary mt-3" type="submit">Login</button>
        </form>
        { errorMessage && <p className="error-message">{errorMessage}</p> }

      </div>  

      <p>Don't have an account yet?</p>
      <Link className="btn btn-secondary" to={"/signup"}> Sign Up</Link>
    </div>
  )
}

export default LoginPage;