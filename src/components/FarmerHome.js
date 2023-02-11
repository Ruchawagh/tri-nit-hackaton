import React from 'react'
import '../App.css'

import Navbar from './Navbar';
import {
  Link
} from "react-router-dom";

function FarmerHome() {
  return (
    <>
    <Navbar/>
      <div id='mainblock' className="container">
        <div className="block farmerBlock">
          <main className="card card-body p-3 text-center d-flex  m-3">
            <h1 style={{color:"green"}}>For Farmers</h1>
            <p className="lead">This website for farmers provides personalized crop recommendations based on weather and geolocation data, helping them make informed decisions for their farms. It empowers farmers to optimize their crop selection for local conditions, increasing the chances of a successful harvest.</p>
            <p className="lead">
              <Link to="/login" className="btn btn-lg btn-light fw-bold border-white bg-info btnCurrFarm">Login</Link>
              <Link to="/signup" className="btn btn-lg btn-light fw-bold border-white bg-info mx-3 btnCurrFarm">Signup</Link>
            </p>
          </main>
        </div>
        <div className="block gardenerBlock" >
        <main className="card card-body p-3 text-center d-flex  m-3">
            <h1 style={{"color":"#5a8600"}}>For Gardeners</h1>
            <p className="lead">For gardening enthusiasts, this website provides customized plant suggestions based on their location and local weather patterns. By using this site, gardeners can make informed decisions about what plants to grow in their garden. This can help them create a more successful and thriving garden</p>
            <p className="lead">
              <Link to="/login" className="btn btn-lg btn-light fw-bold border-white bg-primary btnCurrGard">Login</Link>
              <Link to="/signup" className="btn btn-lg btn-light fw-bold border-white bg-primary mx-3 btnCurrGard">Signup</Link>
            </p>
          </main>
        </div>
      </div>
    </>
  )
}

export default FarmerHome