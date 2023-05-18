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
      <div className="signup-page">

      <h1 className="pb-4 vinify text-center">VINIFY</h1>

      <div className="card signup-card">
          <form className="p-5 signup-form" onSubmit={handleSignupSubmit}>

            <label className="form-label m-1">Name:</label>
            <input className="form-control auth-input" type="text" name="name" value={name} onChange={handleName} />

            <label className="form-label m-1">Email:</label>
            <input className="form-control auth-input" type="email" name="email" value={email} onChange={handleEmail} />

            <label className="form-label m-1">Password:</label>
            <input className="form-control auth-input" type="password" name="password" value={password} onChange={handlePassword} />

            <button className="btn green-button m-3 px-4" type="submit">Sign up</button>
          </form>
          { errorMessage && <p className="text-center error-message">{errorMessage}</p> }
      </div>
      <p className="pt-4 pb-2" >Already have an account?</p>
      <Link className="btn white-button px-4" to={"/login"}>Login</Link>
    </div>
      
    )
  }
  
  export default SignupPage;