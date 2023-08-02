import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Animes from "./pages/Animes";
import News from "./pages/News";
import Login from "./pages/Login";

import backgroundImage from "./wallpaper.jpg"; // Import the image

function App() {
  return (
    <div  style={{
        backgroundImage: `url(${backgroundImage})`, // Set the background image
        backgroundSize: "cover", // Cover the entire background
        backgroundPosition: "center",
        minHeight: "100vh", // Ensure the div covers the full viewport height
      }}
    >
      <Router>
        <Navbar />
        <div>
        
          
     
          <div/>

          {/* Content */}
          <div >
            <Routes>
              <Route path="/" element={<News />} />
              <Route path="/login" element={<Login />} />
              <Route path="/animes" element={<Animes />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;