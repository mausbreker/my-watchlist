import WatchItem from "./WatchItem";
import movies from '../data/movies.json';

function Landing() {
    const showRating = (movieName, rating) => {alert(`Rating filma ${movieName}: ${rating}`)};
    
    return (
        <main>
            {
                movies.map((movie) => {
                    return (
                        <WatchItem 
                            movieObject={movie}
                            key={movie.id}
                            rating={showRating}
                        />
                    )
                })
            }
        </main>
    )
}

export default Landing;