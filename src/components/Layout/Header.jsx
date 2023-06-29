import React from 'react';
import {Link} from "react-router-dom";
import {PATH_URLS} from "../../core/services/constants";

const Header = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to={PATH_URLS.index}>Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={PATH_URLS.posts}>Posts</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={PATH_URLS.albums}>Albums</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;