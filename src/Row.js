import React, { useEffect, useState } from 'react';
import "./Row.css";
import axios from './axios';
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({title, fetchURL, isLargeRow = false}) {
    const [trailerUrl, setTrailerUrl] = useState("");
    const [movies, setMovies] = useState([]);

    const baseURL = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
   }, [fetchURL])

   function truncate(string, n){
    return string?.length > n ? string.substr(0, n-1) + '...' : string;
  }

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || '' )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };


    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row_posters'>
            {movies.map(movie => (

                (isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                <div className='row_contents' >
                <img                
                className={`row_poster ${isLargeRow && 'row_posterLarge'}`} 
                key={movie.id} 
                src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path }`} 
                alt={movie.title || movie.name || movie.original_name}/>
                <div className='img_desc' onClick={() => handleClick(movie)} >
                    <h3>{movie.title || movie.name || movie.original_name}</h3>
                    <p>{truncate(movie.overview, 100)}</p>
                </div>
               </div>
            ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    );
}

export default Row;
