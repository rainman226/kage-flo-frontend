import React from "react";
import NewNavbar from "../src/components/NewNavbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {  TopAnimesProvider } from "./TopAnimesContext";
import Animes from "./pages/animes/Animes";
import News from "./pages/New/News";
import NewFormLogin from "./pages/Login/NewFormLogin";
import AnimeDetail from "./pages/animes/AnimeDetail";
import SignUp from "./pages/Login/SignUp";
import NewFromSignUp from "./pages/Login/NewFromSignUp"
import NewProfile from "./components/NewProfile"

import backgroundImage from "./pexels-photo-1038002.jpg"; // Import the image
import AnimeDetailPage from "./pages/animes/AnimeDetailPage";
import AnimeEntry from "./pages/animes/AnimeEntry";
import NewDetail from "./pages/New/NewDetail";
import AddNews from "./pages/New/AddNews"


function App() {
  return (<div 
    className="bg-gradient-to-r from-indigo-500/80 to-indigo-500" //
    // className="bg-gradient-to-r from-green-100 to-yellow-900"
     style={{
        // backgroundImage: `url(${backgroundImage})`, // Set the background image
        backgroundSize: "repeat", // Cover the entire background
        // backgroundPosition: "center",
        minHeight: "100vh", // Ensure the div covers the full viewport height
        overflow: "hidden"
      }}
    >
      {/* Here are all the routes and all the paths to know exactly where to go and what component to render */}
      <Router>
        <TopAnimesProvider> {/* Wrap your component tree */}
          <NewNavbar />
          <div>
            <Routes>
              
              <Route path="/" element={<News />} />
              <Route path="/anime/:id" element={<AnimeDetailPage />} />
              <Route path="/login" element={<NewFormLogin />} />
              <Route path="/animes" element={<Animes />} />
              <Route path="/top/:id" element={<AnimeDetail />} />
              <Route path="/signup" element={<NewFromSignUp />} />
              <Route path="/profile" element={<NewProfile />} />
              <Route path="/addEntry" element={<AnimeEntry />} />
              <Route path="/newDetail/:id" element={<NewDetail />} />
              <Route path="/addNews" element={<AddNews />}/>
              
             


            </Routes>
          </div>
        </TopAnimesProvider>
      </Router>
    </div>
  );
}

export default App;