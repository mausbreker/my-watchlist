import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NotificationContext } from '../App';
import navList from '../data/nav.json';
import '../styles/nav.scss';

function Nav() {
    const location = useLocation();
    const {notification} = useContext(NotificationContext);

    return (
        <nav className='main-nav'>
            <ul>
                {
                    navList.map((navItem, index) => {
                        // let isActive = false;

                        // if (location.pathname === navItem.url) {
                        //     isActive = true;
                        // }

                        const classList = [];

                        if (location.pathname === navItem.url) {
                            classList.push('active')
                        }

                        if (navItem.url === '/') {
                            classList.push('home-page');

                            if (notification) {
                                classList.push('notification')
                            }
                        }

                        return (
                            <li key={index}>
                                <Link className={classList.join(' ')} to={navItem.url}>{navItem.title}</Link>
                            </li>
                        )
                    })        
                }     
            </ul>
        </nav>
    )
}

export default Nav;