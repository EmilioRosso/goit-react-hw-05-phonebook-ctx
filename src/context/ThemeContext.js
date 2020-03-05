import React, { Component, createContext } from "react";

const Context = createContext();

class ThemeContext extends Component {
  static Consumer = Context.Consumer;

  changeTheme = event => {
    this.setState({ name: event.target.value });
  };

  state = {
    name: "light",
    onChangeTheme: this.changeTheme
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default ThemeContext;
