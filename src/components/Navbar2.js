import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
                    <Link className="navbar-brand" to="/">SYNERGY</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                        <form className="d-flex mx-5 border" role="search">
                            <input className="form-control me-2" type="search" placeholder="Find other Farmers" aria-label="Search"/>
                            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                        </form>
                    <ul className="navbar-nav mx-5">
                        <li className="nav-item active mx-3" >
                            <Link className="nav-link pr-5" style={{fontWeight:"normal"}} to="/">Home</Link>
                        </li>
                        <li className="nav-item mx-3" >
                            <Link className="nav-link pr-5 " style={{fontWeight:"normal"}} to="/schemes">Schemes</Link>
                        </li>
                        <li className="nav-item mx-3" >
                            <Link className="nav-link pr-5 " style={{fontWeight:"normal"}} to="/blogs">Blog</Link>
                        </li>
                        <li className="nav-item mx-3" >
                            <Link className="nav-link pr-5" onClick={logout} style={{fontWeight:"normal"}} to="/">Logout</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar2