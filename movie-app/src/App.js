import {useState, useEffect} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { getMovieList, searchMovie } from './fetchapi.js';

const App = () => {
const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result)
    })
  }, [])

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className='Movie-wrapper'key={i}>
          <div className='Movie-title'>{movie.title}</div>
          <img className='Movie-image' src={movie.poster_path}/>
        </div>
       
      )
    })
  }

  const search = (q) => {
    console.log({q})
  }

  console.log({popularMovies: popularMovies})
  return (
    <div className="App">
      <header className="App-header">
        <h1>Test</h1>
        <input 
        placeholder='Search Movie' 
        className='Movie-search'
        onChange={(target) => search(target.value)}
        
        />
        <div className='Movie-container'>
          <PopularMovieList />
          </div>
      </header>
    </div>
  );
}

export default App;