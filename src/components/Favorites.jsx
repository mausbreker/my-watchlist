import { useState } from 'react';
import { useEffect } from 'react';
import movies from '../data/movies.json';
import WatchItem from './WatchItem';

const Favorites = () => {
    const favoriteMovies = movies.filter(movie => movie.isFavorite);
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log('Komponenta Favorites se mountala');

        return () => console.log('Komponenta umrla');
    }, [])

    useEffect(() => {
        console.log('Number se promijenio');
    }, [number])

    return (
        <>
            <button onClick={() => setNumber(number + 1)}>Uvećaj za 1</button>
            <h3>{number}</h3>

            <div className="movies-wrap">
                {
                    favoriteMovies.map(movie => {
                        return (
                            <WatchItem 
                                movieObject={movie}
                                key={movie.id}
                            />
                        )
                    })
                }
            </div>
        </>
    );
}
 
export default Favorites;