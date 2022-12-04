import React from "react";
import logo from "../../imgs/logo.png";
import { connect } from "react-redux";
import { APPLY_TITLE_SEARCH } from "../../constants/actionTypes";
import agent from "../../agent";

const mapDispatchToProps = (dispatch) => ({
  onSetTitleSearch: (searchTitleTerm, payload) =>
    dispatch({ type: APPLY_TITLE_SEARCH, searchTitleTerm, payload }),
});

const Banner = (props) => {
  const setTitleSearch = (search) => {
    agent.setTitleSearchTerm(search);
    props.onSetTitleSearch(search, agent.Items.all());
  };

  const onChange = (ev) => {
    ev.preventDefault();
    if (ev.target.value.length === 0 || ev.target.value.length > 2) {
      setTitleSearch(ev.target.value);
    }
  };
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span>A place to </span>
          <span id="get-part">get</span>
          <input
            id="search-box"
            type="text"
            className="mx-2"
            onChange={onChange}
            placeholder="What is it you truly desire?"
          ></input>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(Banner);
