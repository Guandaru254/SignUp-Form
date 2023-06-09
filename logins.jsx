import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })
    const handleChange = (event) => {
        setValues({...values, [event.target.name]:[event.target.value]})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/logins',values)
        .then(res => console.log("Registration Successful"))
        .catch(err => console.log("Registration Failed"));
    }
 return (
    <div className='d-flex w-100 vh-100 bg-primary justify-content-center align-items-center'>
        <div className='bg-white p-3 rounded w-25'>
          <h2>SIGN UP</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
                  <label htmlFor="name"><strong>Name</strong></label>
                  <input type="text" placeholder="Enter Name"  name="name"
                  className='form-control rounded-0' onChange={handleChange}/>
            </div>
            <div className="mb-3">
                  <label htmlFor="email"><strong>Email</strong></label>
                  <input type="text" placeholder='Enter Name' name="email"
                  className='form-control rounded-0' onChange={handleChange}/>
            </div>
            <div className="mb-3">
                  <label htmlFor="password"><strong>Password</strong></label>
                  <input type="text" placeholder='Enter Password' name="password"
                  className='form-control rounded-0' onChange={handleChange}/>
            </div>
            <button type="submit" className='btn btn-success w-100 rounded-0'>Sign Up</button>
            <p>You agree to our terms and conditions.</p> 
          </form>
        </div>
    </div>
 )
}

export default Signup;