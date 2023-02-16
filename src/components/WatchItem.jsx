import propTypes from 'prop-types';
import { useEffect, useState } from 'react';
import '../styles/watch-item.scss';

function WatchItem ({movieObject, rating, isSearchResult}) {
    const [isFavorite, setIsFavorite] = useState(movieObject.isFavorite);

    // useEffect(() => {
    //     alert('nesto')
    // }, [isFavorite])

    return (
        <article className='watch-item'>
            <div className='img-wrap' style={{fontSize: '24px', backgroundImage: `url(${movieObject.imagePath})`}}></div>
            <h3>{movieObject.title}, {movieObject.year}.</h3>
            {rating && <button onClick={() => rating(movieObject.title, movieObject.rating)}>Show rating</button>}
            {
                isSearchResult ? 
                    <button>Add movie</button> :
                    <button className='favorite' onClick={() => setIsFavorite(!isFavorite)}>
                        {isFavorite ? "💜" : "♡"}
                    </button>
            }       
        </article>
    )
}

export default WatchItem;

WatchItem.propTypes = {
    movieObject: propTypes.object
}