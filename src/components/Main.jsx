import WatchItem from "./WatchItem";
import movies from '../data/movies.json';

function Main() {
    return (
        <main>
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
        </main>
    )
}

export default Main;