import { useState } from "react";
import axios from 'axios';
import WatchItem from '../components/WatchItem';

const Search = () => {
    const [inputValue, setInputValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    
    const searchMoviesSubmit = (e) => {
        e.preventDefault();

        axios.get(`https://www.omdbapi.com/?apikey=6fe1e02&s=${inputValue}`)
            .then(response => {
                console.log(response.data.Search)
                setSearchResult(response.data.Search)
            })
    }


    // http://www.omdbapi.com/?apikey=6fe1e02

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
                <div className="movies-wrap">
                    {
                        searchResult?.map(movie => {
                            const helperObject = {
                                imagePath: movie.Poster,
                                title: movie.Title,
                                year: movie.Year
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