import './MovieCard.css';
import PropTypes from 'prop-types';
import { useState } from "react";

const MovieCard = ({image, movieTitle, rating, onViewMore}) => {
    const [likeButton, setLike] = useState('🤍');
    
    function liked(){
        if(likeButton === '❤️'){
            setLike('🤍')
        }
        else{
            setLike('❤️');
        }
    }
    return(
        <div className="movie">
            <img className="movieImage" src={image} alt="Movie Image" />
            <div className="movieDetails">
                    <h4 className="movieName">{movieTitle}</h4>
                    <p className="rating">Rating: {rating}</p>
            </div>
            <div id='buttons'>
            <button id='viewDetails' onClick={onViewMore}>View Details</button>
            <button id='like' onClick={liked}>{likeButton}</button>
            </div>
        </div>
    );
}

export default MovieCard;
