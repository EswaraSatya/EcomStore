import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ContactUs from "./Components/Contact/About/ContactUs";
import Album from "./Components/Products/ProductsDummy";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/PSRDesigns" element={<Album />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
