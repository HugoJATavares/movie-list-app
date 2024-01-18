import React, {useState} from 'react'
import axios from 'axios'
import MovieFilters from '../components/MovieFilters';
import MovieList from '../components/MovieList';

export default function SearchMovies(props) {
    const { handleAddToList, savedMoviesMap, handleRemoveFromList } = props;
    const [movies, setMovies] = useState([]);

    const handleSearchMovies = (queries) => {
        const { s } = queries;
        axios.get(`/movies?s=${s}`)
            .then((res) =>{
                if(Array.isArray(res.data.Search)) {
                    setMovies(res.data.Search.map((s)=>{
                        return {
                            imdbID: s.imdbID,
                            title: s.Title,
                            year: s.Year,
                            poster: s.Poster,
                            type: s.Type
                        }
                    }))
                }
            }).catch((err) => {
                alert(err);
            })

    }
  return (
    <div>
        <MovieFilters handleSearchMovies= {handleSearchMovies} />
        <MovieList handleAddToList ={handleAddToList} data={movies}
        savedMoviesMap={savedMoviesMap} handleRemoveFromList={handleRemoveFromList} />
    </div>
    
  )
}
