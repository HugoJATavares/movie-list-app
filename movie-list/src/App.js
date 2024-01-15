import { useState, useEffect } from "react";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import NavBar from "./components/NavBar"
import SearchMovies from "./features/SearchMovies";
import Favourites from "./features/Favourites";

function App() {

  const [savedMovies, setSavedMovies] = useState([]);
  const [savedMoviesMap, setSavedMoviesMap] = useState(null);
  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem("savedMovies") || "[]");
    setSavedMovies(movies);
    const mmap = {};
    movies.forEach((sm) => {
      mmap[sm.imdbID] = true;
    });
    setSavedMoviesMap(mmap);
  }, [])
  
  const handleAddToList = (movie) => {
    const savedMovies = JSON.parse(localStorage.getItem("savedMovies") || "[]");
    const newSavedMovies = [movie, ...savedMovies];
    localStorage.setItem("savedMovies", JSON.stringify(newSavedMovies));
    setSavedMovies(newSavedMovies);
    const newMoviesMap = {
      ...savedMoviesMap,
      [movie.imdbID]: true
    };
    setSavedMoviesMap(newMoviesMap);
  }

  const handleRemoveFromList = (id) => {
    const savedMovies = JSON.parse(localStorage.getItem("savedMovies" || "[]"));
    const filteredMovies = savedMovies.filter((sm) => {
      return sm.imdbID !== id;
    });
    localStorage.setItem("savedMovies", JSON.stringify(filteredMovies));
    setSavedMovies(filteredMovies);
    const newMoviesMap = {
      ...savedMoviesMap,
      [id]:false
    };
    setSavedMoviesMap(newMoviesMap);
  }

  return (
    <BrowserRouter>
      <CssBaseline/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<SearchMovies handleAddToList={handleAddToList} savedMoviesMap={savedMoviesMap} handleRemoveFromList={handleRemoveFromList} />} />
        <Route path="/watchlist" element={<Favourites data={savedMovies} savedMoviesMap={savedMoviesMap} handleRemoveFromList={handleRemoveFromList} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
