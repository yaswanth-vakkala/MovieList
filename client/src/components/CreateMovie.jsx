import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const CreateMovie = (props) => {
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    title: '',
    director: '',
    description: '',
    genre: '',
    released_year: '',
  });
  const onChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post(import.meta.env.VITE_REACT_API, movie)
      .then((res) => {
        setMovie({
          title: '',
          director: '',
          description: '',
          genre: '',
          released_year: '',
        });

        // Push to /
        navigate('/');
      })
      .catch((err) => {
        console.log('Error in CreateBook!');
      });
  };

  return (
    <div className="CreateMovie">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/" className="btn btn-outline-warning float-left">
              Show Movie List
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Add Movie</h1>
            <p className="lead text-center">Create new Movie</p>

            <form noValidate onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Title of the movie"
                  name="title"
                  className="form-control"
                  value={movie.title}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className="form-group">
                <input
                  type="text"
                  placeholder="director"
                  name="director"
                  className="form-control"
                  value={movie.director}
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="genre"
                  name="genre"
                  className="form-control"
                  value={movie.genre}
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Describe this movie"
                  name="description"
                  className="form-control"
                  value={movie.description}
                  onChange={onChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="Number"
                  placeholder="released_year"
                  name="released_year"
                  className="form-control"
                  value={movie.released_year}
                  onChange={onChange}
                />
              </div>

              <input
                type="submit"
                className="btn btn-outline-warning btn-block mt-4"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateMovie;
