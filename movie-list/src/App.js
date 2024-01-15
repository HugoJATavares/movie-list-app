import { CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import NavBar from "./components/NavBar"
import SearchMovies from "./features/SearchMovies";
import Favourites from "./features/Favourites";

function App() {
  
  return (
    <BrowserRouter>
      <CssBaseline/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<SearchMovies />} />
        <Route path="/watchlist" element={<Favourites />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
