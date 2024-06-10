// import { useState } from 'react'
import './App.css'
import Header from './Header';
import MovieCard from './MovieCard';

const App = () => {
  return(
    <div className="App">
      <Header />
      <main>
        <MovieCard movieTitle='Kingdom of the Plant of the Apes' rating='5' image='https://m.media-amazon.com/images/I/81PqziEQvBL._AC_UF894,1000_QL80_.jpg'/>
        <MovieCard movieTitle='Kingdom of the Plant of the Apes' rating='5' image='https://m.media-amazon.com/images/I/81PqziEQvBL._AC_UF894,1000_QL80_.jpg'/>
        <MovieCard movieTitle='Kingdom of the Plant of the Apes' rating='5' image='https://m.media-amazon.com/images/I/81PqziEQvBL._AC_UF894,1000_QL80_.jpg'/>
      </main>

      <footer>
        <button>Load More</button>
      </footer>
    </div>
  );
}

export default App
