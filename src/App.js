import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {  TopAnimesProvider } from "./TopAnimesContext";
import Animes from "./pages/animes/Animes";
import News from "./pages/News";
import Login from "./pages/Login/Login";
import AnimeDetail from "./pages/animes/AnimeDetail";
import SignUp from "./pages/Login/SignUp";
import Profile from "./components/Profile"

import backgroundImage from "./mingwei-lim-Xj69EGAgs2s-unsplash.jpg"; // Import the image
import AnimeDetailPage from "./pages/animes/AnimeDetailPage";

function App() {
  return (<div className="bg-gradient-to-r from-black to-black" //
    // className="bg-gradient-to-r from-green-100 to-yellow-900"
     style={{
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
              <Route path="/anime/:title" element={<AnimeDetailPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/animes" element={<Animes />} />
              {/* <Route path="/anim/:id" element={<AnimeDetail />} /> */}
              <Route path="/signup" element={<SignUp />} />
              <Route path="/profile" element={<Profile />} />
             


            </Routes>
          </div>
        </TopAnimesProvider>
      </Router>
    </div>
  );
}

export default App;