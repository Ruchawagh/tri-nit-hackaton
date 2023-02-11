import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../logo.png'


function Navbar() {
    const navigate = useNavigate()
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img style={{"cursor":"pointer"}} onClick={()=>{navigate('/')}} className='logo' src={logo} alt="" />
                <a className="navbar-brand" href="/">SYNERGY</a>
                <div id="google_translate_element"></div>
                {/* <div className="form-check form-switch">
                    <input className="form-check-input" onClick={changeLang} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" style={{"color":"black"}}  htmlFor="flexSwitchCheckDefault">{lang}</label>
                </div> */}
            </div>
        </nav>
    )
}

export default Navbar