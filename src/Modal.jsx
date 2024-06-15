import { useEffect, useState } from "react";
import './Modal.css';

function Modal({movie, close}) {
    const[trailer, setTrailer] = useState('');

    const getModalVideo = async (movieId) => {
        const apiKey = import.meta.env.VITE_API_KEY;
        const videosUrl =  `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`;
    
        const trailerUrl = await fetch(videosUrl)
            .then((response) => response.json())
            .then((response) =>
            response.results.find(
            (video) => video.site === "YouTube" && video.type === "Trailer"
            )
        )
        .then((trailer) => `https://www.youtube.com/embed/${trailer.key}`)
        .catch((error) => {
        console.error("Error fetching movie trailer:", error);
        });

        setTrailer(trailerUrl);
    };
    
    useEffect(() => {
        getModalVideo(movie.id);
    }, [movie]);;

    const handleModalClose = (e) => {
        e.stopPropagation()
    }

    return(
        <div className="modal" onClick={close}>
            <div className="modal-content" onClick={handleModalClose}>
                <span onClick={close} className="close">&times;</span>
                <div id="imageAndTitle">
                    <img id="movieImage" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="Movie Image" />
                    <div id="titleAndOverview">
                        <h1 id="movieName">{movie.title}</h1>
                        <h3 id="releaseDate">Release date: {movie.release_date}</h3>
                        <p id="overview">Overview: {movie.overview}</p>
                    </div>
                    <iframe
                    src={trailer}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Movie Trailer"
                    className="movieTrailer"
                ></iframe>
                </div>
            </div> 
        </div>
    );
}

export default Modal;