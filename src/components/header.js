import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export function Icon() {
  return (
    <Link to="/shop">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="36"
        viewBox="0 0 42 36"
        fill="none"
      >
        <path
          d="M9.36366 0.269773H4.99248C4.80795 0.107488 4.57217 0 4.30972 0H1.03951C0.467504 0 0 0.48053 0 1.06857C0 1.65661 0.467462 2.13714 1.03951 2.13714H4.30972C4.57216 2.13714 4.80794 2.03387 4.99248 1.86737H8.13148L12.802 22.1699C11.1741 22.7643 10.0259 24.3703 10.0259 26.206C10.0259 28.5686 11.8937 30.4908 14.1941 30.4908H15.6211C15.2582 31.0514 15.0491 31.7216 15.0491 32.4445C15.0491 34.4025 16.5971 36 18.5079 36C20.4188 36 21.9667 34.4025 21.9667 32.4445C21.9667 31.7216 21.7576 31.0535 21.3947 30.4908H28.6527C28.2898 31.0514 28.0807 31.7216 28.0807 32.4445C28.0807 34.4025 29.6286 36 31.5395 36C33.4503 36 34.9983 34.4025 34.9983 32.4445C34.9983 31.7216 34.7891 31.0535 34.4263 30.4908H38.8713C39.3018 30.4908 39.6484 30.1282 39.6484 29.692C39.6484 29.2557 39.2957 28.8932 38.8713 28.8932H14.196C12.7587 28.8932 11.588 27.6897 11.588 26.2123C11.588 24.8802 12.5599 23.7359 13.8454 23.5567L39.5274 19.9696L42 7.34527L10.5854 5.56013L9.3675 0.27846L9.36366 0.269773Z"
          fill="#FEFAEF"
        />
      </svg>
    </Link>
  );
}

function Header() {
  return (
    <>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Luxurious+Script&display=swap"
          rel="stylesheet"
        />
      </head>
      <header className="header">
        <nav className="nav">
          <ul className="nav-list">
            <div className="first-half">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <li className="nav-item dropdown">
                  <Link to="/about-us">About Us</Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/science">Science</Link>
                    </li>
                  </ul>
                </li>
              </li>
            </div>
            <li className="lavan-beauty">Lavan Beauty</li>
            <div className="second-half">
              <li className="nav-item">
                <Link to="/shop">Products</Link>
              </li>
              <li className="nav-item">
                <Link to="/learn">Ingredients</Link>
              </li>
              <Icon />
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
