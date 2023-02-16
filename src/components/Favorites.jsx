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

    return (
        <>
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