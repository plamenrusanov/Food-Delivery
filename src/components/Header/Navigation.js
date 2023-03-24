import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function Navigation() {
  const { isAuthenticated, userName } = useContext(AuthContext);
  return (
    <nav className="header-nav">
      <ul className="left-nav list-nav">
        <li>
          <Link to="/">Menu</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      {isAuthenticated ? (
        <ul className="rigth-nav list-nav">
          <li>
            Hi {userName}
          </li>
          <li>
            <NavLink to="/logout">Logout</NavLink>
          </li>
        </ul>
      ) : (
        <ul className="rigth-nav list-nav">
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Registration</NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}
