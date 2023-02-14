import { useState } from 'react';
import WatchItem from '../components/WatchItem';
import movies from '../data/movies.json';

const MoviesSearch = () => {
    const [search, setSearch] = useState(movies);
    
    const inputSearch = (e) => {
        const value = e.target.value;
        const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(value.toLowerCase()));
        setSearch(filteredMovies);
    };

    return (
        <>
            <h1>Pretraživanje filmova</h1>
            <input type="text" onChange={inputSearch} />
            {
                search.map((movie) => {
                    return (
                        <WatchItem 
                            movieObject={movie}
                            key={movie.id}
                        />
                    )
                })
            }
        </>
    );
}
 
export default MoviesSearch;