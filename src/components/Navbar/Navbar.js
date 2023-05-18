import React from "react";
import rick from "../../assets/rick.png";

const Navbar = ({ brand }) => {
  return (
    <nav className="navbar navbar-dark">
      <div className="container text-center">
        <a className="navbar-brand text-uppercase rounded mx-auto d-block" href="/">
          <img
            src={rick}
            alt="Rick and morty"
            title="Rick and morty"
            className="img-fluid rounded"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
