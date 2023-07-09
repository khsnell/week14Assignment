import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="container text-center bg-danger">
      <MovieList />
    </div>
  );
}

export default App;
