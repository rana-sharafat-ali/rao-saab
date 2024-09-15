import React from "react";
// import {Link} from "react-router-dom";
export default function NavBar(props) {
  return (
    <>
      <nav
        className={`fixed-top navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <a className="navbar-brand font-weight-bold" href="#textm">
          Rao Sahab
        </a>
        {/* <Link className="navbar-brand font-weight-bold" to="/">
          Rao Sahab
        </Link> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mr-5">
            <li className="nav-item active">
              {/* <a className="nav-link font-weight-bold" href="/">
                Home <span className="sr-only">(current)</span>
              </a> */}
              {/* <Link className="nav-link font-weight-bold" to="/">
                Home <span className="sr-only">(current)</span>
              </Link> */}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#textm">
                Text Manupulaor
              </a>
             
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#counter">
                Counter
              </a>
             
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About Me
              </a>
              {/* <Link className="nav-link" to="/About">
                About Me
              </Link> */}
            </li>
            <li className="nav-item dropdown">
              {/* <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                More from us
              </a> */}
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {/* <Link className="dropdown-item" to="/Counter-usestate">
                  Counter
                </Link> */}
                {/* <Link className="dropdown-item" to="/usestate-event">
                  Text Manipulator
                </Link> */}
                {/* <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">
                  Something else here
                </a> */}
              </div>
            </li>

            <li className="nav-item">
              <button
                onClick={props.changer}
                className={`btn btn-${props.mode}`}
              >
                {props.btn}
              </button>
            </li>












{/* 

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                More Themes
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <button className="dropdown-item">Theme 1</button>
                <button className="dropdown-item">Theme 2</button>
                <button className="dropdown-item">Theme 3</button>
              </div>
            </li> */}












          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search (Unavalible)"
              aria-label="Search"
              disabled
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              disabled
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}
