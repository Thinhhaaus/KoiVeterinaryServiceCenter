import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Ensure you import BrowserRouter
import HomePage from './pages/HomePage';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import StandardCare from './Pages/StandardCare';
import AquaticPlant from './Pages/AquaticPlant';
import KoiFood from './Pages/KoiFood';


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
        <Route path="/KoiFood" element={<KoiFood />} />
      </Routes>
    </Router>
  );
}

export default App;
