import React, { useState } from "react";  // ✅ Correct import
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";


function App() {
  const [contact, setContact] = useState(false);

  return (
    <>
    <Router>
      <NavBar setContact={setContact} contact={contact} />
      <Routes>
        <Route path="/" element={<Home contact={contact} />} />
        <Route path="/About" element={<About contact={contact}/>} />

      </Routes>
    </Router>
    </>
 
  );
}

export default App;
