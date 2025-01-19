import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Signup.css';


export default function Signup() {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/signup', { name, email, password })
    .then(result => {
        console.log(result)
        navigate('/signin');
      
      })
    .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className="container mt-5" id='signupContainer'>
        <div className="form-container">
        <h2>Welcome to Zerodha</h2>
            
                <div className="form">
                    <h2>SignUp Form</h2>
                    <input
                      type="text"
                      placeholder='name'
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
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
                    <button onClick={handleSubmit}>SignUp</button>

                    <p>
                      Already have an account?
                      <Link to="/signin">Log in</Link>
                    </p>
                </div> 
            
        </div>
    </div>
  )
}



