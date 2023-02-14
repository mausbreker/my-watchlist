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
                                <a href={navItem.url}>{navItem.title}</a>
                            </li>
                        )
                    })        
                }     
            </ul>
        </nav>
    )
}

export default Nav;