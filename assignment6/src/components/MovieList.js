import React from 'react';

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => ( 
            <div className='d-flex justify-content-center m-2 movie-item'>
                <img src ={movie.Poster} alt={movie.Title}></img>
                <h3 className='movie-title'>{movie.Title}</h3>
            </div> ))}
        </>
    )
}

export default MovieList;