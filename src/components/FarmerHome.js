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
          <main class="px-3 text-center d-flex flex-column">
            <h1>For Farmers</h1>
            <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
            <p class="lead">
              <Link to={"/login"} class="btn btn-lg btn-light fw-bold border-white bg-white">Login</Link>
            </p>
          </main>
        </div>
        <div className="block gardenerBlock">
        <main class="px-3 text-center d-flex flex-column">
            <h1>For Gardeners</h1>
            <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
            <p class="lead">
              <a href="/login" class="btn btn-lg btn-light fw-bold border-white bg-primary">Login</a>
            </p>
          </main>
        </div>
      </div>
    </>
  )
}

export default FarmerHome