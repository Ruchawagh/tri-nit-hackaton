import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import Navbar2 from './Navbar2';

function DashboardFarmer() {
  let navigate = useNavigate()
  useEffect(() => {
    if(!localStorage.getItem("token")){
      navigate("/")
    }
  }, [navigate])
  
  return (
    <>
    <Navbar2/>
    <div>DashboardFarmer</div>
    </>
  )
}

export default DashboardFarmer