import Movie from '../models/Movie.js';

const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (err) {
    res.status(404);
    res.json({ message: 'No movies found', error: err.message });
  }
};

const getMovie = async (req, res) => {
  Movie.findById(req.params.id)
    .then((book) => res.status(200).json(book))
    .catch((err) =>
      res.status(404).json({ message: 'No movies found', error: err.message })
    );
};

const postMovie = async (req, res) => {
  const newMovie = new Movie(req.body);
  try {
    await newMovie.save();
    res.status(200).json({ message: 'movie added successfully' });
  } catch (err) {
    res.status(400);
    res.json({ message: 'cannot add the movie', error: err.message });
  }
};

const updateMovie = async (req, res) => {
  const movieId = req.params.id;
  const body = req.body;
  try {
    await Movie.findByIdAndUpdate(movieId, body);
    res.status(200).json({ message: 'movie updated successfully' });
  } catch (err) {
    res.status(400);
    res.json({ message: "movie can't be updated", error: err.message });
  }
};

const deleteMovie = async (req, res) => {
  const movieId = req.params.id;
  try {
    await Movie.findByIdAndDelete(movieId);
    res.status(200).json({ message: 'movie deleted' });
  } catch (err) {
    res.status(404);
    res.json({ message: 'movie not found', error: err.message });
  }
};

export { getMovies, getMovie, postMovie, deleteMovie, updateMovie };
