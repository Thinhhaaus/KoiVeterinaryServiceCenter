import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Ensure you import BrowserRouter
import HomePage from './pages/HomePage';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import StandardCare from './Pages/StandardCare';
import AquaticPlant from './Pages/AquaticPlant';
import ListDoctor from './Pages/ListDoctor';
import ProfileDoctor from './Pages/ProfileDoctor';
import Bill from './Pages/Bill';
import Pond from './Pages/Pond';
import Consult from './Pages/Consult';
import WaterPond from './Pages/WaterPond';
import AppoinmentUser from './Pages/AppoinmentUser';
import AppointmentTreatment from './Pages/AppointmentTreatment';


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/Sign-Up" element={<SignUp />} />
        <Route path="/StandardCare" element={<StandardCare />} />
        <Route path="/AquaticPlant" element={<AquaticPlant />} />
        <Route path="/ListDoctor" element={<ListDoctor />} />
        <Route path="/Profile" element={<ProfileDoctor/>} />
        <Route path="/Bill" element={<Bill/>} />
        <Route path="/Consult" element={<Consult/>} />
        <Route path="/Pond" element={<Pond/>} />
        <Route path="/WaterPond" element={<WaterPond/>} />
        <Route path="/AppoinmentUser" element={<AppoinmentUser/>} />
        
        <Route path="/AppointmentTreatment" element={<AppointmentTreatment/>} />
      </Routes>
    </Router>
  );
}

export default App;
