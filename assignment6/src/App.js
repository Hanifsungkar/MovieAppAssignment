import React, { useEffect, useState } from 'react';
import './Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import MovieHeading from './components/MovieHeading';
import SearchBox from './components/SearchBox';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('')

  const getMovieReq = async () => {
    const url = `http://www.omdbapi.com/?s=${search}&apikey=${process.env.REACT_APP_API_KEY}`;
    
    const response = await fetch(url);
    const responseJson = await response.json();

   if(responseJson.Search) {
    setMovies(responseJson.Search);
   }
  }

  useEffect(() => {
    getMovieReq(search);
  }, [search])

  return (
  <body className='body'>
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mb-4'>
        <MovieHeading heading ='MOVIES'/>
        <SearchBox search={search} setSearch={setSearch} />
      </div>
      <div className='row'>
        <MovieList movies = {movies} />
      </div>
    </div>
  </body>
  );
}

export default App;
