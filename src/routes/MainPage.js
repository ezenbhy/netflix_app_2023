import React from 'react';
import requests from "api/requests";
import Banner from "components/Banner";
import Row from "components/Row";

function MainPage() {
  return (
    <div>
     <Banner />
     <Row title="NETFLIX ORIGINALS" id="NO" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
     <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending} />
     <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />
     <Row title="Animation Movie" id="AM" fetchUrl={requests.fetchAnimationMovies} />
     <Row title="Family Movie" id="FM" fetchUrl={requests.fetchFamilyMovies} />
     <Row title="Adventure Movie" id="DM" fetchUrl={requests.fetchAdventureMovies} />
     <Row title="Science Fiction Movie" id="SM" fetchUrl={requests.fetchScienceFictionMovies} />
     <Row title="Action Movie" id="CM" fetchUrl={requests.fetchAction} />
    </div>
  )
}

export default MainPage