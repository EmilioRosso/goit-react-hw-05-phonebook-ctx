import React, { Component } from "react";
import style from "./ContactListItem.module.css";
import PropTypes from "prop-types";

class ContactListItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  };

  render() {
    return (
      <li className={style.item}>
        <p>
          {this.props.name}: {this.props.number}
        </p>
        <button
          className={style.delete}
          onClick={this.props.onDeleteContact}
          type="button"
        >
          Удалить
        </button>
      </li>
    );
  }
}

export default ContactListItem;
