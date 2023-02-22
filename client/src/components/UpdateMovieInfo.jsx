import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const UpdateMovieInfo = () => {
  const [movie, setMovie] = useState({
    title: '',
    director: '',
    description: '',
    genre: '',
    released_year: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_REACT_API+`/${id}`)
      .then((res) => {
        setMovie({
          title: res.data.title,
          director: res.data.director,
          genre: res.data.genre,
          description: res.data.description,
          released_year: res.data.released_year,
        });
      })
      .catch((err) => {
        console.log('Error from UpdateMovieInfo');
      });
  }, [id]);

  const onChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: movie.title,
      director: movie.director,
      genre: movie.genre,
      description: movie.description,
      released_year: movie.released_year,
    };

    axios
      .put(import.meta.env.VITE_REACT_API+`/${id}`, data)
      .then((res) => {
        navigate(`/show-movie/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdateMovieInfo!');
      });
  };

  return (
    <div className="UpdateMovieInfo">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <Link to="/" className="btn btn-outline-warning float-left">
              Show Movie List
            </Link>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Edit Movie</h1>
            <p className="lead text-center">Update Movie's Info</p>
          </div>
        </div>

        <div className="col-md-8 m-auto">
          <form noValidate onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder="Title of the Movie"
                name="title"
                className="form-control"
                value={movie.title}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="isbn">Genre</label>
              <input
                type="text"
                placeholder="Genre"
                name="genre"
                className="form-control"
                value={movie.genre}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="author">Director</label>
              <input
                type="text"
                placeholder="Director"
                name="director"
                className="form-control"
                value={movie.director}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                placeholder="Description of the Movie"
                name="description"
                className="form-control"
                value={movie.description}
                onChange={onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="published_date">Released Year</label>
              <input
                type="text"
                placeholder="Released Year"
                name="released_year"
                className="form-control"
                value={movie.released_year}
                onChange={onChange}
              />
            </div>
            <br />

            <button
              type="submit"
              className="btn btn-outline-info btn-lg btn-block"
            >
              Update Movie
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateMovieInfo;
