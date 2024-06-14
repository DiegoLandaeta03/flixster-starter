import './MovieCard.css';
import PropTypes from 'prop-types';

const MovieCard = ({image, movieTitle, rating, onViewMore}) => {
    return(
        <div className="movie">
            <img className="movieImage" src={image} alt="Movie Image" />
            <div className="movieDetails">
                    <h4 className="songName">{movieTitle}</h4>
                    <p className="rating">Rating: {rating}</p>
            </div>
            <button onClick={onViewMore}>View Details</button>
        </div>
    );
}

export default MovieCard;
