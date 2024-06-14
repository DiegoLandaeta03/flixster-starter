import { useEffect, useState } from "react";
import './Modal.css';
import PropTypes from 'prop-types';

function Modal({movie, close}) {
    return(
        <div className="modal">
            <div className="modal-content">
                <span  onClick={close} className="close">&times;</span>
                <div id="imageAndTitle">
                    <img id="movieImage" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="Movie Image" />
                    <div id="titleAndOverview">
                        <h1 id="movieName">{movie.title}</h1>
                        <h3 id="releaseDate">Release date: {movie.release_date}</h3>
                        <p id="overview">Overview: {movie.overview}</p>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default Modal;