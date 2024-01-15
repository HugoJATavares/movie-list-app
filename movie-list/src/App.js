import { useState, useEffect } from "react";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import NavBar from "./components/NavBar"
import SearchMovies from "./features/SearchMovies";
import Favourites from "./features/Favourites";

function App() {

  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem("savedMovies") || "[]");
    setSavedMovies(movies);
  }, [])
  
  const handleAddToList = (movie) => {
    const savedMovies = JSON.parse(localStorage.getItem("savedMovies") || "[]");
    const newSavedMovies = [movie, ...savedMovies];
    localStorage.setItem("savedMovies", JSON.stringify(newSavedMovies));
    setSavedMovies(newSavedMovies);
  }
  return (
    <BrowserRouter>
      <CssBaseline/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<SearchMovies handleAddToList={handleAddToList} />} />
        <Route path="/watchlist" element={<Favourites data={savedMovies} />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
