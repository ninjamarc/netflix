import React from "react";
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Datatable from "./Datatable";
import Search from "./Search";
import Login from "./Login";
import { Provider } from "react-redux";
import store from "./app/store";
import Movies from "./Movies";
import TvShows from './TvShows'




function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Nav />
              <Banner />
                <Row title="NETFLIX ORIGNALS" 
                  fetchUrl={requests.fetchNetflixOriginals} 
                  isLargeRow={true}/>
                <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow={true}/>
                <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated} isLargeRow={true} />
                <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isLargeRow={true}/>
                <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isLargeRow={true}/>
                <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isLargeRow={true}/>
                <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isLargeRow={true}/>
                <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} isLargeRow={true}/>
              </Route>
              <Route exact path='/table'>
                <Datatable />
              </Route>
              <Route exact path='/search'>
                <Nav />
                <Banner />
                <Search />
              </Route>
              <Route exact path='/login'>
                <Login />
              </Route>
              <Route exact path='/movies'>
                <Movies />
              </Route>
              <Route exact path='/tvshows'>
                <TvShows />
              </Route>
            </Switch>
          </BrowserRouter>
        </Provider>
    </div>
  );
}

export default App;
