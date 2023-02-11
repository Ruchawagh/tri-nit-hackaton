import React, { useState } from 'react'
import logo from '../logo.png'
import Navbar from './Navbar'



function Signup() {
    const [loc, setLoc] = useState("Click on Get Location")
    const YOUR_API_KEY = '2ea176fc8e15498eafc1009764eb3321';
    function getLocation(e) {
        e.preventDefault()
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }
    function showPosition(position) {
        let a = position.coords.latitude;
        let b = position.coords.longitude;
        console.log(a);
        console.log(b);
        const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${a}&lon=${b}&apiKey=${YOUR_API_KEY}`;
        let prom = fetch(url)
        prom.then((res) => {
            return res.json();
        }).then((data) => {
            // console.log(data);
            setLoc(data.features[0].properties.state_district);
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <>
            <Navbar />
            <div id="texxt"></div>
            <div className="container my-3">
                <main className="form-signin w-100 m-auto d-flex align-items-center justify-content-center">
                    <form className='text-center' style={{ "width": "50vw" }}>
                        <img className="mb-4" src={logo} alt="" width="72" height="72" style={{ "borderRadius": "50%" }} />
                        <h1 className="h3 mb-3 fw-normal">Please Sign Up</h1>

                        <div className="form-floating my-2">
                            <input type="text" className="form-control" id="name" placeholder="1872638" />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating my-2">
                            <input type="number" className="form-control" id="floatingInput" placeholder="1872638" />
                            <label htmlFor="floatingInput">Phone Number</label>
                        </div>
                        <div className="form-floating my-2">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className="form-floating my-2">
                            <input type="password" className="form-control" id="floatingPassword2" placeholder="cPassword" />
                            <label htmlFor="floatingPassword2">Confirm Password</label>
                        </div>
                        <div className="container p-0 d-flex justify-content-between align-items-center">

                            <div className="form-floating my-2" style={{ "width": "48%" }}>
                                <input type="number" className="form-control" id="age" placeholder="age" />
                                <label htmlFor="age">Age</label>
                            </div>
                            <div className="form-floating my-2" style={{ "width": "48%" }}>
                                <input type="number" className="form-control" id="income" placeholder="income" />
                                <label htmlFor="income">Annual Income</label>
                            </div>
                        </div>
                        <div className="container p-0 d-flex justify-content-between align-items-center my-2">
                            <input style={{ "width": "48%" }} type="text" value={loc} disabled className='text-center form-control' />
                            <div style={{ "width": "50%" }} className="container d-flex align-items-center justify-content-center">
                                <button onClick={getLocation} className='btn btn-danger bg-danger' style={{ "opacity": "1 !important" }}>Get Location</button>
                            </div>
                        </div>
                        <div className="container d-flex justify-content-between p-0 my-3">
                            <select className="btn btn-light dropdown-toggle m-0 mr-2" style={{ "width": "48%" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <option value="0">Male</option>
                                <option value="1">Female</option>
                                <option value="2">Others</option>
                            </select>
                            <select name="crops" id="crops" className='p-2 rounded' style={{ "width": "48%" }}>
                                <option value={0}>Rice</option>
                                <option value={1}>Wheat</option>
                                <option value={2}>Millet</option>
                                <option value={3}>Pulses</option>
                                <option value={4}>Tea</option>
                                <option value={5}>Coffee</option>
                                <option value={6}>Sugarcane</option>
                                <option value={7}>Oil seeds</option>
                                <option value={8}>Cotton</option>
                                <option value={9}>Jute</option>
                            </select>

                        </div>


                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign Up</button>
                        <p className="mt-5 mb-3" style={{ "color": "white", "textShadow": "2px 2px 8px black" }}>© Synergy 2023</p>
                    </form>
                </main>
            </div>
        </>
    )
}

export default Signup