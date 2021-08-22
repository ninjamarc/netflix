import React from 'react'
import Row from './Row'
import Banner from './Banner'
import Nav from './Nav';
import requests from './requests';

function Movies({title, fetchUrl}) {
    return (
        <div className='movies'>
            <Nav />
            <Banner />
            <Row title="Upcoming Movies" fetchUrl={requests.fetchGetUpcoming} isLargeRow={true} />
            <Row title="Now Playing" fetchUrl={requests.fetchNowPlaying} isLargeRow={true} />
            <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated} isLargeRow={true} />
            <Row title="Popular Movies" fetchUrl={requests.fetchGetPopular} isLargeRow={true} />
        </div>
    )
}

export default Movies
