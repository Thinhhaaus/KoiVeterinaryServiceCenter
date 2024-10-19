import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Ensure you import BrowserRouter
import HomePage from './pages/HomePage';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import StandardCare from './Pages/StandardCare';


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/Sign-Up" element={<SignUp />} />
        <Route path="/StandardCare" element={<StandardCare />} />
      </Routes>
    </Router>
  );
}

export default App;
