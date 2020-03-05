import React, { Component } from "react";
import PropTypes from "prop-types";

import style from "./Filter.module.css";
import withThemeContext from "../../HOC/withThemeContext";

class Filter extends Component {
  handleInput = evt => {
    this.props.filterHandler(evt.target.value);
  };

  static propTypes = {
    filterHandler: PropTypes.func.isRequired
  };
  render() {
    return (
      <label className={style.item}>
        Find contact by name
        <input
          className={style.field}
          type="text"
          name="filter"
          onChange={this.handleInput}
        />
      </label>
    );
  }
}

export default withThemeContext(Filter);
