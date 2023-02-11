import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../logo.png'


function Navbar() {
    const navigate = useNavigate()
    const [lang, setLang] = useState("English")
    const changeLang = ()=>{
        if(lang==="English"){
            setLang("हिंदी")
        }
        else{
            setLang("English")
        }
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img style={{"cursor":"pointer"}} onClick={()=>{navigate('/')}} className='logo' src={logo} alt="" />
                <a className="navbar-brand" href="/">SYNERGY</a>

                <div className="form-check form-switch">
                    <input className="form-check-input" onClick={changeLang} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">{lang}</label>
                </div>
            </div>
        </nav>
    )
}

export default Navbar