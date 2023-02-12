import './App.css';
import FarmerHome from './components/FarmerHome';
import Login from './components/Login';
import DashboardFarmer from './components/DashboardFarmer';
import {
  Routes,
  Route,
} from "react-router-dom";
import Signup from './components/Signup';
import Blogs from './components/Blogs';
import Schemes from './components/Schemes';




function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<FarmerHome/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/dashboard" element={<DashboardFarmer/>} />
      <Route path="/blogs" element={<Blogs/>} />
      <Route path="/schemes" element={<Schemes/>} />
    </Routes>
    
    </>
  );
}

export default App;
