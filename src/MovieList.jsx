import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import './MovieList.css';
import PropTypes from 'prop-types';

const MovieList = ({searchQuery, sortType}) => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const apiKey = import.meta.env.VITE_API_KEY;
    const [searched, setSearched] = useState(false);
    const[sorted, setSorted] = useState(false);

    useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNWI2NmYyNjlhNTM1ZDFiNjY5ODM1MTI2ZGJhZjhlNCIsInN1YiI6IjY2NjdjZDBiZWM2YmUzOGRlZmQwMmVjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BjLg00u-FmZoO9cFk_kCvpZP4GYtUVHe7-LwF1jWsBc'
        }
        };
        let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${page}`;

        if(searchQuery != ''){
            console.log(`Search is: ${searchQuery}`)
            if(!searched){
                setPage(1);
                setSearched(true);
            }

            if(page > 1){
                url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&page=${page}&query=${searchQuery}`;
                fetch(url)
                    .then(response => response.json())
                    .then(response => setData([...data, ...response.results]))
                    .catch(err => console.error(err));
            }
            else{
                url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&page=${page}&query=${searchQuery}`;
                fetch(url)
                    .then(response => response.json())
                    .then(response => setData(response.results))
                    .catch(err => console.error(err));
            } 
        }else if(sortType != ''){
            if(!sorted){
                setPage(1);
                setSorted(true);
            }
            if(page > 1){
                url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}&sort_by=${sortType}`;
                fetch(url)
                    .then(response => response.json())
                    .then(response => setData([...data, ...response.results]))
                    .catch(err => console.error(err));
            }
            else{
                url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}&sort_by=${sortType}`;
                fetch(url)
                    .then(response => response.json())
                    .then(response => setData(response.results))
                    .catch(err => console.error(err));
            }
        } else{ 
            if(searched || sorted){
                console.log("Used search, now back to now playing");
                setSearched(false);
                setSorted(false);
                setPage(1);
                console.log(page);
                fetch(url)
                    .then(response => response.json())
                    .then(response => setData(response.results))
                    .catch(err => console.error(err));
            }
            else{
                fetch(url)
                    .then(response => response.json())
                    .then(response => setData([...data, ...response.results]))
                    .catch(err => console.error(err));
            }
        }
    }, [page, searchQuery, sortType])

    const loadMore = () =>{
        setPage(page + 1);
    }

    return(
        <main>
            <div className="movieList">
                {data.map(movie => (
                    <MovieCard this movieTitle={movie.title} rating={movie.vote_average} image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} key={`${movie.id}-${Math.random()}`}/>)
                )}
            </div>
            <button onClick={loadMore} id='loadMore'>Load More</button>
        </main>
    );
}

MovieList.propTypes = {
    searchQuery: PropTypes.string,
    sortType: PropTypes.string,
};

export default MovieList;