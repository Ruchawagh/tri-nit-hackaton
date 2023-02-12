import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Navbar2 from './Navbar2';

function DashboardFarmer() {
  const [details, setDetails] = useState([])
  const {max_temp,min_temp,feels_like,desc,sunrise,sunset,speed,hum,deg} = details;
  const [weather, setWeather] = useState([])
  let APIkey = "4579767b6d10a2faa2c5248d373065fe"

  const getWeather = (cityname) => {
    // cityname = details.location
    if(cityname==="Hanumakonda"){
      cityname = "Hyderabad"
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}&units=metric`)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        let city = response.name;
        let temp = response.main.temp;
        let max_temp = response.main.temp_max;
        let min_temp = response.main.temp_min;
        let feels_like = response.main.feels_like;
        
        // icon.setAttribute("src", `http://openweathermap.org/img/w/${response.weather[0].icon}.png`)
        // let main = response.weather[0].main;
        let desc = response.weather[0].description;
        let sunrise = new Date(response.sys.sunrise * 1000).getHours() + ":" + new Date(response.sys.sunrise * 1000).getMinutes();
        let sunset = new Date(response.sys.sunset * 1000).getHours() + ":" + new Date(response.sys.sunset * 1000).getMinutes();
        
        let speed = response.wind.speed
        let hum = response.main.humidity
        let deg = response.wind.deg
        setWeather({city,temp,max_temp,min_temp,feels_like,desc,sunrise,sunset,speed,hum,deg})
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
  const getCSV = () => {

  }

  let navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/")
    }
    getUserData()
    getWeather(details.location)
  }, [navigate])

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
    </>
  )
}

export default DashboardFarmer