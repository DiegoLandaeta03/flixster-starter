import './MovieCard.css';
import PropTypes from 'prop-types';

function MovieCard(props){
    return(
        <div className="movie">
            <img className="movieImage" src={props.image} alt="Movie Image" />
            <div className="movieDetails">
                    <h4 className="songName">{props.movieTitle}</h4>
                    <p className="rating">Rating: {props.rating}</p>
            </div>
        </div>
    );
}

MovieCard.propTypes = {
    image: PropTypes.string,
    movieTitle: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
};

export default MovieCard;
