import MovieCard from "./MovieCard";
import './MovieList.css';
import.meta.env.VITE_APP_KEY;

function MovieList(){
    // let movies = fetchMovies();
    fetch(import.meta.env.VITE_APP_KEY)
    .then((response) => {
        if(response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
        })
        .then((data) => {
            console.log(data);
        })
    return(
    <main>
        <MovieCard movieTitle='Kingdom of the Plant of the Apes' rating='5' image='https://m.media-amazon.com/images/I/81PqziEQvBL._AC_UF894,1000_QL80_.jpg'/>
        <MovieCard movieTitle='Kingdom of the Plant of the Apes' rating='5' image='https://m.media-amazon.com/images/I/81PqziEQvBL._AC_UF894,1000_QL80_.jpg'/>
        <MovieCard movieTitle='Kingdom of the Plant of the Apes' rating='5' image='https://m.media-amazon.com/images/I/81PqziEQvBL._AC_UF894,1000_QL80_.jpg'/>
    </main>
    );
}

// function fetchMovies(){
//     fetch("https://api.themoviedb.org/3/configuration")
//     .then((response) => {
//         if(response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//         })
// }

export default MovieList;