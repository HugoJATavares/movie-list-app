import React, {useState} from 'react'
import axios from 'axios'

export default function SearchMovies() {
    const [movies, setMovies] = useState([]);

    const handleSearchMovies = (queries) => {
        const { s } = queries;
        axios.get(`https://www.omdbapi.com/?s=${s}&apikey=${omdbApiKey}`)
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
            }).catch((error)=>

    }
  return (
    <div>SearchMovies</div>
  )
}
