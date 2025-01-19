import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Signup.css'

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/signin', { email, password })
    .then(result => {
        console.log(result);
        
        if ( result.data.user == true ) {
          navigate('/');
        }
        else {
          alert("Invalid Username or Password")
          console.log("Error");
        }
      
      })
    .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className="container mt-5" id='signupContainer'>
        <div className="form-container">
        <h2>Zerodha welcomes you</h2>
            
                <div className="form">
                    <h2>Login Form</h2>
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button onClick={handleSubmit}>Login</button>
                    <p>
                      Don't have an account?
                      <Link to="/signup">Sign Up</Link>
                   </p>
                </div> 
            
        </div>
    </div>
  )
}


