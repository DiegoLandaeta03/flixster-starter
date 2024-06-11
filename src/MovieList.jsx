import MovieCard from "./MovieCard";
import './MovieList.css';
import.meta.env.VITE_APP_KEY;

function MovieList(){
    return(
    <main>
        <MovieCard movieTitle='Kingdom of the Plant of the Apes' rating='5' image='https://m.media-amazon.com/images/I/81PqziEQvBL._AC_UF894,1000_QL80_.jpg'/>
        <MovieCard movieTitle='Kingdom of the Plant of the Apes' rating='5' image='https://m.media-amazon.com/images/I/81PqziEQvBL._AC_UF894,1000_QL80_.jpg'/>
        <MovieCard movieTitle='Kingdom of the Plant of the Apes' rating='5' image='https://m.media-amazon.com/images/I/81PqziEQvBL._AC_UF894,1000_QL80_.jpg'/>
    </main>
    );
}

export default MovieList;