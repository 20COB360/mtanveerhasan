import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import About from './pages/about/about'
import Home from './pages/home/home'
import Education from './pages/education/education'
import Certificate from './pages/certificate/certificate'
import Skill from './pages/skills/skill'
import Ad from './pages/projects/ad'
import Hms from './pages/projects/hms'
import Rls from './pages/projects/rls'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Dictionary from "./pages/projects/dictionary";
import Calc from "./pages/projects/calc";
import Ieee from "./pages/experiance/ieee";
import Piclub from "./pages/experiance/piclub";
import Amutc from "./pages/experiance/amutc";


function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/education" element={<Education />}></Route>
          <Route path="/skill" element={<Skill />}></Route>
          <Route path="/certificate" element={<Certificate />}></Route>
          <Route path="/ad" element={<Ad />}></Route>
          <Route path="/hms" element={<Hms />}></Route>
          <Route path="/rls" element={<Rls />}></Route>
          <Route path="/dictionary" element={<Dictionary />}></Route>
          <Route path="/calc" element={<Calc />}></Route>
          <Route path="/amutc" element={<Amutc />}></Route>
          <Route path="/piclub" element={<Piclub />}></Route>
          <Route path="/ieee" element={<Ieee />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
