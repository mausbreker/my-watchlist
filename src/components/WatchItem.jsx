import propTypes from 'prop-types';
import { useState } from 'react';
import '../styles/watch-item.scss';

function WatchItem ({movieObject, rating}) {
    const [isFavorite, setIsFavorite] = useState(movieObject.isFavorite);

    return (
        <div className="movies-wrap">
            <article className='watch-item'>
                <img 
                    src={movieObject.imagePath} 
                    alt={movieObject.title} 
                />
                <h3>{movieObject.title}, {movieObject.year}.</h3>
                {rating && <button onClick={() => rating(movieObject.title, movieObject.rating)}>Show rating</button>}
                <button onClick={() => setIsFavorite(!isFavorite)}>
                    {
                        isFavorite ? "Makni iz favorita" : "Dodaj u favorite"
                    }
                </button>
            </article>
        </div>
    )
}

export default WatchItem;

WatchItem.propTypes = {
    movieObject: propTypes.object
}