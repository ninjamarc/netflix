import React, { useEffect, useState } from 'react'
import requests from './requests';
import axios from './axios';
import {API_KEY} from './requests'



function Search() {

    const [data, setData] = useState("")
    const [query, setQuery] = useState("")
    const [search, setSearch] = useState("")

    const base_url = "https://image.tmdb.org/t/p/original/";


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`);
            console.log(data.results)
            setData(request.data)
            
            return request
           
        }
        fetchData()
   }, [query])


    return (
        <div className='search'>
            <input
                type='text'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type='button' onClick={() => setSearch(query)}>
                Search
            </button>
            <div className='search__row'>
             {data && data.results.map((item) => (
                <div className='search__container'>
                    <img 
                            key={item.id}
                            className='search__poster'
                            src={`${base_url}${item.poster_path}`}
                            alt={item.name}
                    />
                </div>
            ))} 
            </div>
        </div>
    )
}

export default Search
