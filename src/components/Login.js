import React from 'react'
import logo from '../logo.png'
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom'

function Login() {
  let navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    navigate("/dashboard")
  }


  return (
    // <div>Login</div>
    <>
      <Navbar />
      <div className="container text-center p-5">

      <main className="form-signin w-100 m-auto d-flex align-items-center justify-content-center">
        <form onSubmit={handleSubmit} style={{width:"60vw"}}>
          <img className="mb-4" src={logo} alt="" width="72" height="72" style={{borderRadius:"50%"}}/>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating my-3">
              <input type="number" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Phone Number</label>
            </div>
            <div className="form-floating my-2">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            <p className="mt-5 mb-3" style={{"color":"white","textShadow":"2px 2px 8px black"}}>© Synergy 2023</p>
        </form>
      </main>
      </div>
      {/* <form className='container my-5' onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Phone Number</label>
    <input required type="number" minLength={10} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input required type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form> */}
    </>
  )
}

export default Login