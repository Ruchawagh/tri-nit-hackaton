import React, { useEffect, useState } from 'react'
import logo from '../logo.png'
import Navbar from './Navbar';
import { Link, useNavigate } from 'react-router-dom'
const baseUrl = "http://localhost:8000"



function Login() {
  let navigate = useNavigate()
  const [submit, setSubmit] = useState("Submit")
    const [cred, setcred] = useState({mobileNumber:"",password:""})

    const handleSubmit = async (e)=>{
        setSubmit("Logging in...")
        e.preventDefault();
        const response = await fetch(`${baseUrl}/api/farmer/login`,{
            method:"POST",
            headers:{
                "Content-type": "application/json; charset=UTF-8",
            },
            body:JSON.stringify({mobileNumber:cred.mobileNumber,password:cred.password})
        });
        const json = await response.json();
        // console.log(json);
        if(json.success===true){
            //Redirect to home  
            localStorage.setItem('token',json.authToken)
            // props.showAlert("Login Successful","success")
            alert("Logged in success")
            navigate("/dashboard")
        }
        else{
            setSubmit("Submit")
            // alert("Invalid Creds")
            // props.showAlert("Invalid Credentials","danger")
            alert("Invalid Creds")
        }
    }

    const onChange = (e)=>{
        setcred({...cred,[e.target.name]:e.target.value})
    }

    useEffect(() => {
      if(localStorage.getItem("token")){
          navigate("/dashboard")
      }
    }, [navigate])
    


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
              <input onChange={onChange} name='mobileNumber' type="number" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Phone Number</label>
            </div>
            <div className="form-floating my-2">
              <input onChange={onChange} name='password' type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <h5 className='text-light fw-bold' style={{"textShadow":"2px 2px 10px black"}}>Don't have an account? Click <Link style={{"color":"white"}} to="/signup">here</Link></h5>
            <button className="w-100 btn btn-lg btn-primary" type="submit">{submit}</button>
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