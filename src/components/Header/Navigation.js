import {Link, NavLink} from "react-router-dom"

export default function Navigation() {
  return (
    <nav className="header-nav">
      <ul className="left-nav list-nav">
        <li>
          <Link to="#">Menu</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <ul className="rigth-nav list-nav">
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register">Registration</NavLink>
        </li>
      </ul>
    </nav>
  );
}
