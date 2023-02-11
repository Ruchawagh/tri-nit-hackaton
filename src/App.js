import './App.css';
import FarmerHome from './components/FarmerHome';
import Login from './components/Login';
import DashboardFarmer from './components/DashboardFarmer';
import {
  Routes,
  Route,
} from "react-router-dom";
import Signup from './components/Signup';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<FarmerHome/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/dashboard" element={<DashboardFarmer/>} />
    </Routes>
    
    </>
  );
}

export default App;
