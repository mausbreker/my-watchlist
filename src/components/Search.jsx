import { useState } from "react";
import axios from 'axios';
import WatchItem from '../components/WatchItem';
import Spinner from '../data/loading.svg';

const Search = () => {
    const [inputValue, setInputValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
 
    const endpoint = 'https://www.omdbapi.com/?apikey=6fe1e02';
    
    const searchMoviesSubmit = (e) => {
        e.preventDefault();
        console.log('pokreni loader');
        setIsLoading(true);
        fetchMovies();
    }

    const fetchMovies = async () => {
        await axios.get(`${endpoint}&s=${inputValue}`)
            .then(response => {
                console.log(response.data.Search)
                setSearchResult(response.data.Search)
            })
        console.log('zaustavi loader');
        setIsLoading(false);
    }

    return (
        <>
            <div>
                <h1>Search</h1>
                <form onSubmit={searchMoviesSubmit}>
                    <input 
                        onChange={(e) => setInputValue(e.target.value)} 
                        type="text"  
                        />
                    <button type="submit">Search</button>
                </form>
                {isLoading && <img src={Spinner} alt="loading" />}
                <div className="movies-wrap">
                    {
                        searchResult?.map(movie => {
                            const helperObject = {
                                imagePath: movie.Poster,
                                title: movie.Title,
                                year: movie.Year,
                                id: movie.imdbID
                            }

                            return (
                            <WatchItem 
                                movieObject={helperObject}
                                isSearchResult='true'
                                key={movie.imdbID}
                            />
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}
 
export default Search;