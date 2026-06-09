import { NavLink } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
    return (
        <div className="NotFound">
            <h2>404</h2>
            <p>Page not found.</p>

            <NavLink to="/meetings">
                Back to Meetings
            </NavLink>
        </div>
    );
}