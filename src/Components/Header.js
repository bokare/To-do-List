import React from "react";
import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <nav className="navbar bg-body-dark bg-dark " data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand">{props.title}</a>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          {props.search===true ? <button className="btn btn-outline-success" type="submit">
            Search
          </button> : null}
        </form>
      </div>
    </nav>
  );
};

export default Header;


// default values of properties
Header.defaultProps = {
  title : "this is Default",
  search : true
}


//proptypes for checking datatype of props
Header.propTypes = {
  title : PropTypes.string,
  search:PropTypes.bool.isRequired
}

// Among the seven JavaScript primitive types, function and boolean (written as bool) 
