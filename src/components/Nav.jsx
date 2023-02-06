import navList from '../data/nav.json';

function Nav() {
    return (
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
    )
}

export default Nav;