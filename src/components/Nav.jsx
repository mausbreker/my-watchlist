import { Link, useLocation } from 'react-router-dom';
import navList from '../data/nav.json';
import '../styles/nav.scss'

function Nav() {
    const location = useLocation();

    return (
        <nav className='main-nav'>
            <ul>
                {
                    navList.map((navItem, index) => {
                        let isActive = false;

                        if (location.pathname === navItem.url) {
                            isActive = true;
                        }

                        return (
                            <li key={index}>
                                <Link className={isActive === true ? 'active' : ''} to={navItem.url}>{navItem.title}</Link>
                            </li>
                        )
                    })        
                }     
            </ul>
        </nav>
    )
}

export default Nav;