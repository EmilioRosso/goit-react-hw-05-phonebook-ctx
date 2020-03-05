import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import ThemeSelect from "./components/ThemeSelect";
import ThemeContext from "./context/ThemeContext";
// import themesSettings from "./themes/themesSetings";

class App extends Component {
  state = {
    contacts: [],
    filter: ""
  };

  addContact = ({ name, number }) => {
    const contact = { id: uuidv4(), name, number };
    this.setState(prevState => {
      if (prevState.contacts.some(element => element.name === name)) {
        alert(`${name} is already exists`);
        return;
      }
      const newContacts = [...prevState.contacts, contact];
      return { contacts: newContacts };
    });
  };

  filterSave = str => {
    this.setState({ filter: str.toLowerCase() });
  };

  filterContacts = (cont, str) => {
    if (str === "") {
      return cont;
    } else {
      return cont.filter(element => element.name.toLowerCase().includes(str));
    }
  };

  deleteContact = id => {
    this.setState(prevState => {
      const res = prevState.contacts.filter(element => element.id !== id);
      return { contacts: res };
    });
  };

  render() {
    let filteredContacts = [];
    if (this.state.contacts.length > 1) {
      filteredContacts = this.filterContacts(
        this.state.contacts,
        this.state.filter
      );
    } else {
      filteredContacts = this.state.contacts;
    }
    return (
      <ThemeContext>
        <div>
          <ThemeSelect />

          <ContactForm addNewContact={this.addContact} />

          {this.state.contacts.length >= 2 && (
            <Filter filterHandler={this.filterSave} />
          )}
          <ContactList
            list={filteredContacts}
            filter={this.state.filter}
            deleteContact={this.deleteContact}
          />
        </div>
      </ThemeContext>
    );
  }
}

export default App;
