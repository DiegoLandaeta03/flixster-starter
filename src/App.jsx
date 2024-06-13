import { useState } from 'react';
import './App.css'
import Header from './Header';
import MovieList from './MovieList';

const App = () => {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');

  const handleSearch = (newSearch) => {
    setSearch(newSearch);
  };

  const handleSort = (newSort) => {
    setSort(newSort);
  }

  return(
    <div className="App">
      <Header onDataSubmit={handleSearch} onSortSubmit={handleSort}/>
      <MovieList searchQuery={search} sortType={sort}/>
      <footer>
      </footer>
    </div>
  );
}

export default App
