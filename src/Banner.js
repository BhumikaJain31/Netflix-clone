import React, { useEffect, useState } from 'react';
import './Banner.css';
import requests from './Requests';
import axios from './axios';
const posterBaseUrl = "https://image.tmdb.org/t/p/original/";

function Banner() {
    const [movie, setMovie] = useState([]);

   
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }

        fetchData();
    }, []);
   
    function truncate(string, n){
      return string?.length > n ? string.substr(0, n-1) + '...' : string;
    }

    return (
        <header className='banner'  style={{
            backgroundImage: `url("${posterBaseUrl}${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}> 
            <div className='banner_contents'>
                <h1 className='banner_title'>{movie?.title || movie?.name || movie?.original_name}</h1>
                <button className='banner_button' >Play</button>
                <button className='banner_button'>My List</button>
                <h1 className='banner_description'>{truncate(movie?.overview, 150)}</h1>
            </div>  
            <div className="banner--fadeBottom" />          
        </header>
    );
}

export default Banner;