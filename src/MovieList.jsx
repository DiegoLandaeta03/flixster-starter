import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import './MovieList.css';
import PropTypes from 'prop-types';
import Modal from "./Modal";

const MovieList = ({searchQuery, sortType}) => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const apiKey = import.meta.env.VITE_API_KEY;
    const [searched, setSearched] = useState(false);
    const[sorted, setSorted] = useState(false);
    const[modalOpen, setModalOpen] = useState(false);
    const[currMovie, setMovie] = useState();

    useEffect(() => {
        let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${page}`;

        if(searchQuery != ''){
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
                url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&page=${page}&sort_by=${sortType}`;
                fetch(url)
                    .then(response => response.json())
                    .then(response => setData([...data, ...response.results]))
                    .catch(err => console.error(err));
            }
            else{
                url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&page=${page}&sort_by=${sortType}`;
                fetch(url)
                    .then(response => response.json())
                    .then(response => setData(response.results))
                    .catch(err => console.error(err));
            }
        } else { 
            if(searched || sorted){
                console.log(`Searched: ${searched}, sorted: ${sorted}`)
                setSearched(false);
                setSorted(false);
                console.log(`Back to main`);
                setPage(1);
                url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=1`;
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

    const openModal = (movie) =>{
        setModalOpen(true);
        setMovie(movie);
    }

    const closeModal = () =>{
        setModalOpen(false);
        setMovie('');
    }

    return(
        <main>
            <div className="movieList">
                {data.map(movie => (
                    <MovieCard this movieTitle={movie.title} rating={movie.vote_average} 
                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    key={`${movie.id}-${Math.random()}`} onViewMore={() => openModal(movie)}/>)
                )}
                {modalOpen ? (
                    <Modal movie={currMovie} close={() => closeModal()}/>
                ) : null}
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