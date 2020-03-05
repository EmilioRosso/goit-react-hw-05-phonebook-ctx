import React, { Component } from "react";
import PropTypes from "prop-types";

import withThemeContext from "../../HOC/withThemeContext";
import style from "./ContactForm.module.css";
import themesSettings from "../../themes/themesSetings";

class ContactForm extends Component {
  state = {
    name: "",
    number: ""
  };

  static propTypes = {
    addNewContact: PropTypes.func.isRequired
  };

  handleInput = evt => {
    this.setState({ [evt.target.name]: [evt.target.value] });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.addNewContact({
      name: evt.target.name.value,
      number: evt.target.number.value
    });
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <div
        style={{
          backgroundColor:
            themesSettings[this.props.theme.name].backgroundColor,
          color: themesSettings[this.props.theme.name].color
        }}
      >
        <h1>Phonebook</h1>
        <form className={style.container} onSubmit={this.handleSubmit}>
          <label className={style.item}>
            Name
            <input
              className={style.field}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInput}
            />
          </label>
          <label className={style.item}>
            Phone number
            <input
              className={style.field}
              type="number"
              name="number"
              value={this.state.number}
              onChange={this.handleInput}
            />
          </label>
          <button className={style.submit} type="submit">
            Add Contact
          </button>
        </form>
      </div>
    );
  }
}

export default withThemeContext(ContactForm);
