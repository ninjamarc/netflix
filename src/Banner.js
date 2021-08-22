import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';
import "./Banner.css"
import { useDispatch, useSelector } from 'react-redux';
import {  fetchMovie, setMovie, selectMovie } from './features/bannerSlice';

function Banner() {
    //const [movie, setMovie] = useState([]);
    const dispatch = useDispatch()
    const movie = useSelector(setMovie)
    


    //const { loading, movie, error } = useSelector(bannerSelector)

    //run once when the banner is loaded
    useEffect(() => {
        // async function fetchData() {
        //     const request = await axios.get(requests.fetchTrending);
        //     setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
        //     );
        //     return request;
        dispatch(fetchMovie())
        }, [dispatch]);
        // fetchData();
        
     

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }



    return (
        
            <header className="banner"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url(
                        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                    )`,
                    bacgroundPosition: "center center",
                }}
            >
                <div className="banner__contents">
                    <h1 className="banner__title">
                        {movie?.title || movie?.name || movie?.original_name}
                    </h1>

                    <div className="banner__buttons">
                        <button className="banner__button">Play</button>
                        <button className="banner__button">My List</button>
                    </div>

                    <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
                    
                </div>
                <div className="banner--fadeBottom" />
            </header>
            
        
    )
}

export default Banner
