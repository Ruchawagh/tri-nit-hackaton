import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar2 from './Navbar2';
import jsondata from '../csvjson.json'
import dataRef from '../dataref.json'


function DashboardFarmer() {
  const [details, setDetails] = useState([])
  let { city, temp, max_temp, min_temp, feels_like, desc, sunrise, sunset, speed, hum, deg } = details;
  const [weather, setWeather] = useState([])
  let APIkey = "82b1f8bcc38a41a3a4942618231202"

  const oneData = {
    "State Code": 20,
    "Indian Census State Code 2011": 280,
    "State Name": "Telangana",
    "District Code": 60,
    "Indian Census District Code 2011": 540,
    "DistrictName": "Hanumakonda",
    "ICRISAT Indian Id": 3222,
    "SAT/NONSAT District": 1,
    "Region Code": 3,
    "Region Name": "Telangana region",
    "Agro Ecological Zones ICRISAT": 3,
    "Agro Ecological Zones NATP": 5,
    "AEZ Production Zones NATP": 5.1,
    "Latitude": 18,
    "Longitude": 79.6
  }

  const getWeather = (cityname) => {
    cityname = details.location
    // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}&units=metric`)
    fetch(`http://api.weatherapi.com/v1/current.json?key=${APIkey}&q=${cityname}&aqi=yes`)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        city = response.location.name;
        temp = response.current.temp_c;
        max_temp = response.current.feelslike_c+4.2;
        min_temp = response.current.feelslike_c-5;
        feels_like = response.current.feelslike_c;

        // icon.setAttribute("src", `http://openweathermap.org/img/w/${response.weather[0].icon}.png`)
        // let main = response.weather[0].main;
        desc = response.current.condition.text;
        // sunrise = new Date(response.sys.sunrise * 1000).getHours() + ":" + new Date(response * 1000).getMinutes();
        // sunset = new Date(response.sys.sunset * 1000).getHours() + ":" + new Date(response * 1000).getMinutes();
        sunrise = "6:39";
        sunset = "18:41"
        speed = response.current.wind_kph
        hum = response.current.humidity
        deg = response.current.wind_degree
        setWeather({ city, temp, max_temp, min_temp, feels_like, desc, sunrise, sunset, speed, hum, deg })
      })
      .catch((err) => {
        console.log(err, " is my error");
      });
  }


  const getUserData = async () => {
    let resp = await fetch("http://localhost:8000/api/farmer/getuser", {
      method: 'POST',
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "auth-token": localStorage.getItem("token")
      }
    })
    const json = await resp.json();
    console.log(json);
    setDetails(json)

  }

  // const getJsonData = ()=>{
  //   let arr = jsondata.filter((e)=>{
  //     return e.DistrictName===details.location
  //   }).map((filteredName)=>{
  //     console.log(filteredName);
  //   })
  //   console.log(JSON.stringify({"name":"ShivaRK"}));
  //   return JSON.stringify(arr);
  // }

  let navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/")
    }
    getUserData()
    getWeather(details.location)
    // getJsonData()
  }, [navigate, details.location])

  return (
    <>
      <Navbar2 />
      
      <div className="container">
        <section class="section about-section gray-bg" id="about">
          <div class="container bg-light m-3 rounded p-2">
            <div class="row align-items-center flex-row-reverse">
              <div class="col-lg-6">
                <div class="about-text go-to">
                  <h3 class="dark-color">{details.name}</h3>
                  <h6 class="theme-color lead">{details.location}</h6>
                  {/* <!-- <p>I <mark>design and develop</mark> services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.</p> --> */}
                  <div class="row about-list">
                    <div class="col-md-6">
                      <div class="media">
                        <label>Age</label>
                        <p>{details.age} Years</p>
                      </div>
                      <div class="media">
                        <label>Residence</label>
                        <p>{details.location}</p>
                      </div>
                      <div class="media">
                        <label>Address</label>
                        <p>{details.location}, India</p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="media">
                        <label>Phone</label>
                        <p>{details.mobileNumber}</p>
                      </div>
                      <div class="media">
                        <label>Gender</label>
                        <p>{details.gender}</p>
                      </div>
                      <div class="media">
                        <label>Crops</label>
                        <p>Rice, Wheat</p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="about-avatar">
                  <img src="https://bootdey.com/img/Content/avatar/avatar7.png" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="container">
        <div class="container py-3">
          <main>
            <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
              <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm border-primary">
                  <div class="card-header py-3 text-bg-primary border-primary">
                    <h4 class="my-0 fw-normal">Temperature</h4>
                  </div>
                  <div class="card-body">
                    <h1 class="card-title pricing-card-title"><span id="temp">{weather.temp}</span>&#8451;</h1>
                    <ul class="list-unstyled mt-3 mb-4">
                      <li>Maximum Temperature is <span id="max_temp">{weather.max_temp}</span>&#8451;</li>
                      <li>Minimum Temperature is <span id="min_temp">{weather.min_temp}</span>&#8451;</li>
                      <li>It feels like <span id="feels_like">{weather.feels_like}</span>&#8451;</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm border-primary">
                  <div class="card-header py-3 text-bg-primary border-primary">
                    <h4 class="my-0 fw-normal">City</h4>
                  </div>
                  <div class="card-body">
                    <ul class="list-unstyled mt-3 mb-4">
                      {/* <li><img src={`http://openweathermap.org/img/w/${weather.icon}.png`} id="icon" alt="" /></li> */}
                      <li><h2><span id="main"></span></h2></li>
                      <li><h2><span id="main">{details.location}</span></h2></li>
                      <li><h6>Desc: <span id="desc">{weather.desc}</span></h6></li>
                      <li>Sunrise at <span id="sunrise">{weather.sunrise}</span></li>
                      <li>Sunset at <span id="sunset">{weather.sunset}</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm border-primary">
                  <div class="card-header py-3 text-bg-primary border-primary">
                    <h4 class="my-0 fw-normal">Wind</h4>
                  </div>
                  <div class="card-body">
                    <h1 class="card-title pricing-card-title"><span id="speed">{weather.speed}</span><small class="text-muted fw-light">km/h</small></h1>
                    <ul class="list-unstyled mt-3 mb-4">
                      <li>Humidity: <span id="hum">{weather.hum}</span>%</li>
                      <li>Deg: <span id="deg">{weather.deg}</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="container bg-light rounded m-5 p-2">
        { <h1 className='mx-5'>You are at {details.location}</h1>}
        <h3 className='mx-4'>Your Region: {oneData['Region Name']}</h3>
          <h6 className='mx-4'>AEZ Production Zones NATP : {oneData['AEZ Production Zones NATP']}</h6>
          <h6 className='mx-4'>Crops Predicted are {dataRef[oneData['AEZ Production Zones NATP']]}</h6>
          <h6 className='mx-4'>Your Latitude: {oneData['Latitude']}</h6>
          <h6 className='mx-4'>Your Longitude: {oneData['Longitude']}</h6>
          <h6 className='mx-4'>Your ICRISAT Indian Id : {oneData['ICRISAT Indian Id']}</h6>
      </div>
    </>
  )
}

export default DashboardFarmer