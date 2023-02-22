
import './App.css';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './request';
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Nav></Nav>

      <Banner fetchUrl={requests.fetchNetflixOriginals}></Banner>
      
      <Row isLargeRow={true} title="NetflixOriginal" fetchUrl={requests.fetchNetflixOriginals}></Row>
      <Row title="Trending" fetchUrl={requests. fetchTrending}></Row>
      <Row title="TopRated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="ActionMovies" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="ComedyMovies" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="Documentaries" fetchUrl={requests. fetchDocumentaries}></Row>
      
    </div>
  );
}

export default App;
