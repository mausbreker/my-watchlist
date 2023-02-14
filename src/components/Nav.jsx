import { Link } from 'react-router-dom';
import navList from '../data/nav.json';
import '../styles/nav.scss'

function Nav() {
    return (
        <nav className='main-nav'>
            <ul>
                {
                    navList.map((navItem, index) => {
                        return (
                            <li key={index}>
                                <Link to={navItem.url}>{navItem.title}</Link>
                            </li>
                        )
                    })        
                }     
            </ul>
        </nav>
    )
}

export default Nav;