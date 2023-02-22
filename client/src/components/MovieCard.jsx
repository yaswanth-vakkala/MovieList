import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const MovieCard = (props) => {
  const movie = props.movie;

  return (
    <div className="card-container">
      <img className='cardimg'
        src="https://img.freepik.com/free-vector/abstract-grunge-background-with-film-strip_1017-7079.jpg?w=740&t=st=1677084497~exp=1677085097~hmac=c376544ec18f5b1ef57b6d7d12a5a545ada6c6508a6a8fa9d50156394165e9eb"
        alt="Movies"
        height={200}
      />
      <div className="desc">
        <h2>
          <Link className='titlelink' to={`/show-movie/${movie._id}`}>{movie.title}</Link>
        </h2>
        <h3>{movie.director}</h3>
        <p>{movie.description}</p>
      </div>
    </div>
  );
};

export default MovieCard;
