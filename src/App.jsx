import { useState } from 'react';
import './App.css'
import Header from './Header';
import MovieList from './MovieList';

const App = () => {
  const [data, setData] = useState('');

  const handleSearch = (newData) => {
    setData(newData);
  };

  return(
    <div className="App">
      <Header onDataSubmit={handleSearch}/>
      <MovieList searchQuery={data}/>
      <footer>
      </footer>
    </div>
  );
}

export default App
