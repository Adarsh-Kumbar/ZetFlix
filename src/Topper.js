import React, { useEffect, useState } from 'react'
import axios from './axios';
import requests from './requests';
import './Topper.css'

function Topper() {

    const [movie, setMovie] = useState([]);

    useEffect(() =>{
        async function fetchData(){
            const request=await axios.get(requests.fetchTopActionMovies);
            setMovie(
                request.data.results[Math.floor(Math.random() * request.data.results.length-1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    console.log(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      }
    
  return (
    <header className="topper"
        style={{
            backgroundSize:"cover", 
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition: "center center"
        }}
    >
        <div className="topper_contents">
            <h1 className="topper_title">{movie?.title || movie?.name || movie?.original_name}</h1>

            <div className="topper_buttons">
                <button className="topper_button">Play</button>
                <button className="topper_button">My List</button>
            </div>

            <h1 className='topper_description'>{truncate(movie?.overview, 150)}</h1>
        </div>

        <div className="topper--fadebutton"/>

    </header>
  )
}

export default Topper