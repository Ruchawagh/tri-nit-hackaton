import React from 'react'

import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom'

function Login() {
    let navigate = useNavigate()
    const handleSubmit = async (e)=>{
        e.preventDefault()
        navigate("/dashboard")
    }


  return (
    // <div>Login</div>
    <>
    <Navbar/>
    <form className='container my-5' onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Phone Number</label>
    <input required type="number" minLength={10} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input required type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </>
  )
}

export default Login