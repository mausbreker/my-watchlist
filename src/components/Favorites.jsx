import { useState } from 'react';
import { useEffect } from 'react';
import movies from '../data/movies.json';
import WatchItem from './WatchItem';

const Favorites = () => {
    const [localMovies, setLocalMovies] = useState(JSON.parse(localStorage.getItem('movies')) || []);
    const filteredMovies = localMovies.filter(movie => movie.isFavorite);

    return (
        <>
            <div className="movies-wrap">
                {
                    filteredMovies.map(movie => {
                        return (
                            <WatchItem 
                                movieObject={movie}
                                key={movie.id}
                                setLocalMovies={setLocalMovies}
                            />
                        )
                    })
                }
            </div>
        </>
    );
}
 
export default Favorites;