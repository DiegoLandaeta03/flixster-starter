import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import './MovieList.css';
import.meta.env.VITE_APP_KEY;

const MovieList = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
    // const apiKey = import.meta.env.VITE_API_KEY;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNWI2NmYyNjlhNTM1ZDFiNjY5ODM1MTI2ZGJhZjhlNCIsInN1YiI6IjY2NjdjZDBiZWM2YmUzOGRlZmQwMmVjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BjLg00u-FmZoO9cFk_kCvpZP4GYtUVHe7-LwF1jWsBc'
        }
        };
        
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => setData(response.results))
        .catch(err => console.error(err));
    })

    // console.log(data);
    return(
        <main>
            <div className="movieList">
                {data.map(movie => (
                    <MovieCard this movieTitle={movie.title} rating={movie.vote_average} image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} key={movie.id}/>)
                )}
            </div>
            <button id='loadMore'>Load More</button>
        </main>
    );
}

export default MovieList;