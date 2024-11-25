import { NavLink } from "react-router-dom";

export default function navbar() {
    return (

        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/books">Books</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
        </nav>
    )
}