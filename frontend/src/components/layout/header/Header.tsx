import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {

    return (
        <header className="Header">

            <h1>
                Development Meetings
            </h1>

            <nav>

                <NavLink to="/meetings">
                    Meetings
                </NavLink>

                <NavLink to="/meetings/new">
                    Add Meeting
                </NavLink>

            </nav>

        </header>
    );
}