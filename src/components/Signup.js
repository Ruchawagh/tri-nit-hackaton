import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../logo.png'
import Navbar from './Navbar'
const baseUrl = "http://localhost:8000"
// import { Dropdown } from 'react-bootstrap'



export default function Signup() {
    const [submit, setSubmit] = useState("Submit")
    const [cred, setcred] = useState({ name: "", mobileNumber: "", password: "", cpassword: "", age: 0, gender: "Male", annualIncome: 0, location: "", crops: [] })
    let navigate = useNavigate()

    const { name, mobileNumber, password, cpassword, age, gender, annualIncome, location, crops } = cred
    const handleSubmit = async (e) => {
        setSubmit("Creating Account...")
        if (password !== cpassword) {
            e.preventDefault()
            setSubmit("Submit")
            alert("Password dont match")
            // props.showAlert("Passwords dont match", "danger")
        }
        else {
            e.preventDefault();
            try {
                const response = await fetch(`${baseUrl}/api/farmer/createFarmer`, {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    },
                    body: JSON.stringify({ name, mobileNumber, password, age, gender, location, annualIncome, crops })
                });
                const json = await response.json();
                // console.log(json);
                if (json.success) {
                    //Redirect to home  
                    localStorage.setItem('token', json.authToken)
                    navigate("/dashboard")
                    // props.showAlert("Created New Account Successfully", "success")
                    alert("Account created Succesfully")
                }
                else {
                    setSubmit("Submit")
                    // alert("Invalid Creds")
                    // props.showAlert("Account Already exists", "danger")
                    alert("Account created Succesfully")
                }
            } catch (err) {
                console.log(err);
            }
        }
    }

    const onchange = (e) => {
        console.log(cred);
        setcred({ ...cred, [e.target.name]: e.target.value })
    }
    const onchangeDropdown = (e) => {
        setcred({ ...cred, [e.target.name]: e.target[0].text })
    }

    const [loc, setLoc] = useState("Click on Get Location")
    const YOUR_API_KEY = '2ea176fc8e15498eafc1009764eb3321';
    const getLocation = (e) => {
        e.preventDefault()
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    const showPosition = (position) => {
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
            const place = data.features[0].properties.state_district;
            setLoc(place);
            setcred({...cred,"location":place})
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
                    <form className='text-center' style={{ "width": "50vw" }} onSubmit={handleSubmit}>
                        <img className="mb-4" src={logo} alt="" width="72" height="72" style={{ "borderRadius": "50%" }} />
                        <h1 className="h3 mb-3 fw-normal">Please Sign Up</h1>

                        <div className="form-floating my-2">
                            <input name='name' onChange={onchange} type="text" className="form-control" id="name" placeholder="1872638" />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating my-2">
                            <input name='mobileNumber' onChange={onchange} type="number" className="form-control" id="floatingInput" placeholder="1872638" />
                            <label htmlFor="floatingInput">Phone Number</label>
                        </div>
                        <div className="form-floating my-2">
                            <input name='password' onChange={onchange} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <div className="form-floating my-2">
                            <input name='cpassword' onChange={onchange} type="password" className="form-control" id="floatingPassword2" placeholder="cPassword" />
                            <label htmlFor="floatingPassword2">Confirm Password</label>
                        </div>
                        <div className="container p-0 d-flex justify-content-between align-items-center">

                            <div className="form-floating my-2" style={{ "width": "48%" }}>
                                <input name='age' onChange={onchange} type="number" className="form-control" id="age" placeholder="age" />
                                <label htmlFor="age">Age</label>
                            </div>
                            <div className="form-floating my-2" style={{ "width": "48%" }}>
                                <input name='annualIncome' onChange={onchange} type="number" className="form-control" id="income" placeholder="income" />
                                <label htmlFor="income">Annual Income</label>
                            </div>
                        </div>
                        <div className="container p-0 d-flex justify-content-between align-items-center my-2">
                            <input name='location' style={{ "width": "48%" }} type="text" value={loc} disabled className='text-center form-control' />
                            <div style={{ "width": "50%" }} className="container d-flex align-items-center justify-content-center">
                                <button onClick={getLocation} className='btn btn-danger bg-danger' style={{ "opacity": "1 !important" }}>Get Location</button>
                            </div>
                        </div>
                        <div className="container d-flex justify-content-between p-0 my-3">
                            <select onChange={onchange} defaultValue={0} name="gender" id="gender" className='p-2 rounded' style={{ "width": "48%" }}>
                                <option id={0} value={"Male"}>Male</option>
                                <option id={1} value={"Female"}>Female</option>
                                <option id={2} value={"Others"}>Others</option>
                            </select>
                            <select onChange={onchangeDropdown} name="crops" id="crops" className='p-2 rounded' style={{ "width": "48%" }}>
                                <option id={0} value={"Rice"}>Rice</option>
                                <option id={1} value={"Wheat"}>Wheat</option>
                                <option id={2} value={"Millet"}>Millet</option>
                                <option id={3} value={"Pulses"}>Pulses</option>
                                <option id={4} value={"Tea"}>Tea</option>
                                <option id={5} value={"Coffee"}>Coffee</option>
                                <option id={6} value={"Sugarcane"}>Sugarcane</option>
                                <option id={7} value={"Oil"}>Oil seeds</option>
                                <option id={8} value={"Cotton"}>Cotton</option>
                                <option id={9} value={"Jute"}>Jute</option>
                            </select>

                        </div>


                        <button className="w-100 btn btn-lg btn-primary" type="submit">{submit}</button>
                        <p className="mt-5 mb-3" style={{ "color": "white", "textShadow": "2px 2px 8px black" }}>© Synergy 2023</p>
                    </form>
                </main>
            </div>
        </>
    )
}
