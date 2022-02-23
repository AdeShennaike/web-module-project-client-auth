import React from "react";
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

function Header() {
    return(
        <header className = 'header'>
            <h1>FRIENDS DATABASE</h1>
            <nav>
            <Link to = '/login'>LOGIN.</Link>
            <Link to = 'friends'>FRIENDLIST.</Link>
            <Link to = '/friends/add'>ADDFRIEND.</Link>
            <Link to = '/logout'>LOGOUT</Link>
            </nav>
      </header>
    )
}

export default Header;