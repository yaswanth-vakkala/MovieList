import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CreateMovie from './components/CreateMovie';
import ShowMovieList from './components/ShowMovieList';
import UpdateMovieInfo from './components/UpdateMovieInfo';
import ShowMovieDetails from './components/ShowMovieDetails';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<ShowMovieList />} />
          <Route path="/create-movie" element={<CreateMovie />} />
          <Route path="/edit-movie/:id" element={<UpdateMovieInfo />} />
          <Route path="/show-movie/:id" element={<ShowMovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
