import './App.css';
import NavBar from './Components/NavBar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Landing from './Pages/Landing';
import Services from './Pages/Services';

import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar/>

      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>

      {/* <Landing/>
      <About/>
      <Services/>
      <Contact/> */}
    </>
  );
}

export default App;
