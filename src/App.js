import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ContactUs from "./Components/Contact/About/ContactUs";
import BusinessCard from "./Components/Products/FlipCard";
import Album from "./Components/Products/ProductsDummy";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/EcomStore" element={<Album />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/BusinessCard" element={<BusinessCard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
