import WatchItem from "./WatchItem";
import movies from '../data/movies.json';
import '../styles/watch-item.scss';
import { useState } from 'react';
import { useEffect } from "react";
import { useContext } from 'react';
import { NotificationContext } from '../App';

function Landing() {
    const [localMovies, setLocalMovies] = useState(JSON.parse(localStorage.getItem('movies')) || []);
    const {setNotification} = useContext(NotificationContext);

    useEffect(() => {
        setNotification()
    }, [])
    
    return (
        <main>
            <div className="movies-wrap">
                {
                    localMovies.map((movie) => {
                        return (
                            <WatchItem 
                                movieObject={movie}
                                key={movie.id}
                                isLandingItem={true}
                                setLocalMovies={setLocalMovies}
                            />
                        )
                    })
                }
            </div>
        </main>
    )
}

export default Landing;