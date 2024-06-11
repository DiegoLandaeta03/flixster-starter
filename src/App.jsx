// import { useState } from 'react'
import './App.css'
import Header from './Header';
import Movies from './MovieList';

const App = () => {
  return(
    <div className="App">
      <Header />
      <Movies />
      <footer>
        <button id='loadMore'>Load More</button>
      </footer>
    </div>
  );
}

export default App
