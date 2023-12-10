import './App.css';
import Header from './Components/Header';
import AboutUs from './Components/pages/AboutUs';
import Blog from './Components/pages/Blog';
import ContactUs from './Components/pages/ContactUs';
import Freebies from './Components/pages/Freebies';
import Home from './Components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
     <Router>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/freebies" element={<Freebies />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
    </>
    );
}

export default App;
