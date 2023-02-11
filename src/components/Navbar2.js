import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../logo.png'


function Navbar2() {
    let navigate = useNavigate()
    const logout = ()=>{
        localStorage.removeItem("token");
        alert("Logged Out")
        navigate('/')
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <img style={{"cursor":"pointer"}} onClick={()=>{navigate('/')}} className='logo' src={logo} alt="" />
                    <a className="navbar-brand" href="/">SYNERGY</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                        <form className="d-flex mx-5 border" role="search">
                            <input className="form-control me-2" type="search" placeholder="Find other Farmers" aria-label="Search"/>
                            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                        </form>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mx-5" style={{"position":"absolute",right:"0"}}>
                        <li className="nav-item active mx-3" >
                            <a className="nav-link pr-5" style={{fontWeight:"normal"}} href="/">Home</a>
                        </li>
                        <li className="nav-item mx-3" >
                            <a className="nav-link pr-5 " style={{fontWeight:"normal"}} href="/">Blog</a>
                        </li>
                        <li className="nav-item mx-3" >
                            <a className="nav-link pr-5" onClick={logout} style={{fontWeight:"normal"}} href="/">Logout</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar2