import propTypes from 'prop-types';

function WatchItem({movieObject}) {
const addToFavorites = () => {
    console.log("Added to favorites");
}

    return (
        <article>
            <img 
                src={movieObject.imagePath} 
                alt={movieObject.title} 
            />
            <h3>{movieObject.title}, {movieObject.year}.</h3>
            <h5>Ocjena: {movieObject.rating}</h5>
            <button onClick={addToFavorites}>
                {movieObject.isFavorite ? "Makni iz favorita" : "Dodaj u favorite"}
            </button>
        </article>
    )
}

export default WatchItem;

WatchItem.propTypes = {
    movieObject: propTypes.object
}