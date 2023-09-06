// eslint-disable-next-line no-unused-vars
import React from "react";
import { PropTypes } from "prop-types";
import { FiSearch } from 'react-icons/fi'

function Header(props) {
  return (
    <div className="header">
      <form action="" className="search-box">
        <input
          type="text"
          placeholder="Enter your location"
          className="input-box"
          value={props.location}
          onChange={props.onLocationChange}
        />
        <button
          id="searchBtn"
          type="submit"
          onClick={props.onSearch}
        ><FiSearch /></button>
      </form>
    </div>
  );
}

Header.propTypes = {
  location: PropTypes.string.isRequired,
  onLocationChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Header;
