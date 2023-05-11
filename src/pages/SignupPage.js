import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import authService from "./../services/auth.service"



function SignupPage(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [errorMessage, setErrorMessage] = useState(undefined)

  const navigate = useNavigate()

  const handleEmail = (e) => setEmail(e.target.value)
  const handlePassword = (e) => setPassword(e.target.value)
  const handleName = (e) => setName(e.target.value)
  

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, name }

    // Make an axios request to the API
    // If POST request is successful redirect to login page
    // If the request resolves with an error, set the error message in the state

    // axios.post(`${API_URL}/auth/signup`, requestBody)    

    authService.signup(requestBody)
      .then((response) => {
        navigate("/login")
      })
      .catch((error) => {
        const errorDescription = error.response.data.message
        setErrorMessage(errorDescription)
      })
  }
  
  return (
      <div className="SignupPage">

      <h1>VINIFY</h1>
      <div className="card signup-card">
          <form className="p-5 signup-form" onSubmit={handleSignupSubmit}>

            <label className="form-label">Name:</label>
            <input className="form-control" type="text" name="name" value={name} onChange={handleName} />

            <label className="form-label">Email:</label>
            <input className="form-control" type="email" name="email" value={email} onChange={handleEmail} />

            <label className="form-label">Password:</label>
            <input className="form-control" type="password" name="password" value={password} onChange={handlePassword} />

            <button className="btn btn-primary mt-3" type="submit">Sign Up</button>
          </form>
          { errorMessage && <p className="error-message">{errorMessage}</p> }
      </div>
      <p>Already have account?</p>
      <Link className="btn btn-secondary" to={"/login"}> Login</Link>
    </div>
      
    )
  }
  
  export default SignupPage;