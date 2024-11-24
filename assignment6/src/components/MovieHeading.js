import React from 'react';

const MovieHeading = (props) => {
    return (
        <div className='col text-dark'>
            <h1>{props.heading}</h1>
        </div>
    )
}

export default MovieHeading;