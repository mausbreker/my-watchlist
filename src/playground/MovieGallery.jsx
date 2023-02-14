import { useState } from 'react';
import WatchItem from '../components/WatchItem';
import movies from '../data/movies.json'

const MovieGallery = () => {
    const [index, setIndex] = useState(0);

    const handleIndex = (action) => {
        if (action === 'increment') {
            setIndex(index + 1);
        } else if (action === 'decrement') {
            setIndex(index - 1);
        }
    }

    return (
        <>
            <h1>Movie Gallery</h1>
            <WatchItem 
                movieObject={movies[index]}
            />
            <button disabled={index === 0} onClick={() => handleIndex('decrement')}>Previous</button>
            <button disabled={index === movies.length - 1} onClick={() => handleIndex('increment')}>Next</button>
        </>
    );
}
 
export default MovieGallery;