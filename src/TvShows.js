import React from 'react'
import Row from './Row'
import Banner from './Banner'
import Nav from './Nav';
import requests from './requests';

function TvShows({title, fetchUrl}) {
        return (
            <div className='tvshows'>
                <Nav />
                <Banner />
                
                <Row title="Airing Today" fetchUrl={requests.fetchAiringToday} isLargeRow={true} />
                <Row title="Popular" fetchUrl={requests.fetchPopularTv} isLargeRow={true} />
                <Row title="Top Rated" fetchUrl={requests.fetchTopRatedTv} isLargeRow={true} />
                <Row title="Now Playing" fetchUrl={requests.fetchNowPlayingTv} isLargeRow={true} />
            </div>
        )
    }

export default TvShows
