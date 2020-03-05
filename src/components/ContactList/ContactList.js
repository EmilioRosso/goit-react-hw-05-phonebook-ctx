import React, { Component } from "react";
import PropTypes from "prop-types";

import ContactListItem from "../ContactListItem";
import withThemeContext from "../../HOC/withThemeContext";
import style from "./ContactList.module.css";
import themesSettings from "../../themes/themesSetings";

class ContactList extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired
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
        <h2>Contacts</h2>
        <ul className={style.list}>
          {this.props.list.map(element => (
            <ContactListItem
              key={element.id}
              name={element.name}
              number={element.number}
              onDeleteContact={() => this.props.deleteContact(element.id)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default withThemeContext(ContactList);
