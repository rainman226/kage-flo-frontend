import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TopAnimesProvider } from "./TopAnimesContext";
import Animes from "./pages/animes/Animes";
import News from "./pages/News";
import Login from "./pages/Login/Login";
import AnimeDetail from "./components/AnimeDetail";

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
        <TopAnimesProvider> {/* Wrap your component tree */}
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<News />} />
              <Route path="/login" element={<Login />} />
              <Route path="/animes" element={<Animes />} />
              <Route path="/anime/:id" element={<AnimeDetail />} />
            </Routes>
          </div>
        </TopAnimesProvider>
      </Router>
    </div>
  );
}

export default App;