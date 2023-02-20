import propTypes from 'prop-types';
import { useEffect, useState } from 'react';
import '../styles/watch-item.scss';
import syncLocalStorage from '../functions/syncLocalStorage';
import { useContext } from 'react';
import { NotificationContext } from '../App';

function WatchItem ({movieObject, rating, isSearchResult, isLandingItem, setLocalMovies}) {
    const [added, setAdded] = useState(false);

    // useEffect(() => {
    //     alert('nesto')
    // }, [isFavorite])

    const {notification, setNotification} = useContext(NotificationContext);

    const handleMovieAdd = () => {
        syncLocalStorage('add', movieObject);
        !notification && setNotification(true);
        setAdded(true);
    }

    const handleMovieRemove = () => {
        const localMovies = syncLocalStorage('remove', movieObject);
        setLocalMovies(localMovies);
    }

    const handleMovieChange = () => {
        const localMovies = syncLocalStorage('change', movieObject);
        setLocalMovies(localMovies);
    }

    return (
        <article className='watch-item'>
            <div className='img-wrap' style={{fontSize: '24px', backgroundImage: `url(${movieObject.imagePath})`}}></div>
            <h3>{movieObject.title}, {movieObject.year}.</h3>
            {rating && <button onClick={() => rating(movieObject.title, movieObject.rating)}>Show rating</button>}
            {
                isSearchResult ?
                    !added && <button className='add' onClick={handleMovieAdd}>Add movie</button> :
                    <button className='favorite' onClick={handleMovieChange}>
                        {movieObject.isFavorite ? "💜" : "♡"}
                    </button>
            }
            {isLandingItem && <button className='delete' onClick={handleMovieRemove}>Delete</button>}  
        </article>
    )
}

export default WatchItem;

WatchItem.propTypes = {
    movieObject: propTypes.object
}