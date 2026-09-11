//This is the navigation bar at the top of every page

import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <nav>
            <h2>My React Website</h2>
            {/*each link has a 'to' prop with the url*/}
            <Link to="/">Home</Link>
            {'|'}
            <Link to="/about">About</Link>
            {'|'}
            <Link to="/contact">Contact</Link>
            </nav>

    )
}

export default Navbar;