import WatchItem from "./WatchItem";
import movies from '../data/movies.json';
import '../styles/watch-item.scss';

function Landing() {
    
    return (
        <main>
            <div className="movies-wrap">
                {
                    movies.map((movie) => {
                        return (
                            <WatchItem 
                                movieObject={movie}
                                key={movie.id}
                            />
                        )
                    })
                }
            </div>
        </main>
    )
}

export default Landing;