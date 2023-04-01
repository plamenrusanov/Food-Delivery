import { useContext } from "react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  const { isAuthenticated, userName, isAdmin } = useContext(AuthContext);
  const { count } = useContext(ShoppingCartContext);
  return (
    <nav className="header-nav">
      <ul className="left-nav list-nav">
        <li>
          <Link to="/">Menu</Link>
        </li>
        <li>
          <Link to="/shopping-cart">
            <FontAwesomeIcon icon={faCartShopping} className="cart" />
            <span className="cart_counter">{count}</span>
          </Link>
        </li>
      </ul>

      {isAuthenticated ? (
        <ul className="rigth-nav list-nav">
          <li>Hi {userName}</li>
          {isAdmin && (
            <li>
              <NavLink to="/create-product">Create Product</NavLink>
            </li>
          )}
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
