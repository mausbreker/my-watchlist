import { useState } from "react";

const Search = () => {
    const searchMoviesSubmit = (e) => {
        e.preventDefault();
        setInputValue(inputValue + ' - pretražujem...');
    }

    const [inputValue, setInputValue] = useState();

    return (
        <>
            <div>
                <form onSubmit={searchMoviesSubmit}>
                    <input 
                        onChange={(e) => setInputValue(e.target.value)} 
                        type="text" 
                        value={inputValue}    
                    />
                    <h3>{inputValue}</h3>
                    <button type="submit">Search</button>
                </form>
            </div>
        </>
    );
}
 
export default Search;