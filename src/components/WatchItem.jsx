import propTypes from 'prop-types';

function WatchItem({movieObject, rating}) {
const addToFavorites = () => console.log("Added to favorites");

    return (
        <article>
            <img 
                src={movieObject.imagePath} 
                alt={movieObject.title} 
            />
            <h3>{movieObject.title}, {movieObject.year}.</h3>
            <button onClick={() => rating(movieObject.title, movieObject.rating)}>Show rating</button>
            <button onClick={addToFavorites}>
                {movieObject.isFavorite ? "Makni iz favorita" : "Dodaj u favorite"}
            </button>
            <hr />
        </article>
    )
}

export default WatchItem;

WatchItem.propTypes = {
    movieObject: propTypes.object
}