import React, { Component } from "react";
import Aux from "../../HOC/Auxx/Auxx";
import Navbar from "../Navigation/Navigation";
//import Button from '../../Components/Button/Button';
import Numeric from "../Numeric/Numeric";
import { Routes, Route, Navigate } from "react-router-dom";
//import App from '../../App';
import AboutUs from "../../Pages/About Us/About Us";
import Product from "../../Pages/Product/Product";
import Contact from "../../Pages/Contact/Contact";
import OurTeam from "../../Pages/Our Team/Our Team";
import ProductDetail from "../../Pages/Product Detail/Product Detail";
import Home from "../../Pages/Home/Home";
import LoginScreen from "../../Pages/Login/LoginScreen";
import SignupScreen from "../../Pages/Login/SignupScreen";
import PrivateRoute from "../../Auth/PrivateRoute";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Navbar />
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/Home" element={<Home />} />
            <Route path="About%20Us" element={<AboutUs />} />
            <Route path="Product" element={<Product />} />
            <Route path="/Our%20Team" element={<OurTeam />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Numeric" element={<Numeric />} />
            <Route path="/Product/:id" element={<ProductDetail />} />
          </Route>
          <Route path="/Login" element={<LoginScreen />} />
          <Route path="/Signup" element={<SignupScreen />} />
        </Routes>
      </Aux>
    );
  }
}

export default Layout;
