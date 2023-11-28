import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/Auth";

export default function Navbar() {
  const { loginUser, signoutUser } = useContext(AuthContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">
            Noxe
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {loginUser ? (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/movies">
                    Movies
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tvshow">
                    Tv Show
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="people">
                    People
                  </Link>
                </li>
              </ul>
            ) : (
              ""
            )}

            <ul className="navbar-nav ms-auto">
              {!loginUser ? (
                <>
                  <li className="nav-item">
                    <a href="https://ar-ar.facebook.com/" className="nav-link">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="https://www.instagram.com/" className="nav-link">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="https://twitter.com/?lang=ar" className="nav-link">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <button onClick={signoutUser} className="nav-link btn text-white" to="">
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
