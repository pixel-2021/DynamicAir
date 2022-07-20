import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/css/Style.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'video-react/dist/video-react.css';
import Header from './component/Header'; 
import HomePage from './component/home';
import Services from './component/Services';
import CompanyProfile from "./component/CompanyProfile";
import Career from "./component/Career";
import Products from "./component/Products";
import Clients from "./component/Clients";
import Technologies from "./component/Technologies";
import Contactus from "./component/Contactus";
import Footer from './component/Footer';

function App() {

    return ( 
        
      <div className = "App"> 
     
        <Router>
      <Header/>  
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="services" element={<Services />} />
          <Route path="about-us" element={<CompanyProfile />} />
          <Route path="products" element={<Products />} />
          <Route path="clients" element={<Clients />} />
          <Route path="technologies" element={<Technologies />} />
          <Route path="career" element={<Career />} />
          <Route path="contact-us" element={<Contactus />} />
        </Routes>
        <Footer/>
    </Router> 
    
      </div>
    );
}

AOS.init({
    once: true
  });

export default App;