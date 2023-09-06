import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Topper from './Topper';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      <Nav/>
      <Topper/>
      <Row 
        title="ZETFLIX NEWEST " 
        fetchUrl={requests.fetchTopActionMovies}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTopComedyMovies}/>
      <Row title="Top Horror Movies" fetchUrl={requests.fetchTopHorrorMovies}/>
      <Row title="Top Romance Movies" fetchUrl={requests.fetchTopRomanceMovies}/>
      <Row title="Science Fiction Movies" fetchUrl={requests.fetchTopScienceFictionMovies}/>
      <Row title="Top Family Movies" fetchUrl={requests.fetchTopFamilyMovies}/>
    </div>
  );
}

export default App;
