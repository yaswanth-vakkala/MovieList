import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

function ShowMovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_REACT_API)
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowMovieList');
      });
  }, []);

  const movieList =
    movies.length === 0
      ? 'there is no movie record!'
      : movies.map((movie, k) => <MovieCard movie={movie} key={k} />);

  return (
    <div className="ShowMovieList">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br />
            <h2 className="display-4 text-center">Movies List</h2>
          </div>

          <div className="col-md-11">
            <Link
              to="/create-movie"
              className="btn btn-outline-warning float-right"
            >
              + Add New Movie
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className="list">{movieList}</div>
      </div>
    </div>
  );
}

export default ShowMovieList;
