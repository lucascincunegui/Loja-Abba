import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import HomeScreen from "../screens/HomeScreen";
import ProductsList from "../screens/ProductsList";
import Error404 from "../screens/Error404";

function Navigation() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route exact path="/products" element={<ProductsList />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default Navigation;
