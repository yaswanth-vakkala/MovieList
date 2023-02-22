import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  genre: {
    type: String,
  },
  released_year: {
    type: Number,
  },
  last_updated: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Movie', MovieSchema);
