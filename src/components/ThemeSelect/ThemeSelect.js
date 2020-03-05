import React, { Component } from "react";

import themesSettings from "../../themes/themesSetings";
import ThemeContext from "../../context/ThemeContext";

class ThemeSelect extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {ctx => (
          <div
            style={{
              backgroundColor: themesSettings[ctx.name].backgroundColor,
              color: themesSettings[ctx.name].color
            }}
          >
            <label>
              <span>Select theme</span>
              <select name="themeSelect" onChange={ctx.onChangeTheme}>
                <option value={themesSettings.light.name}>
                  {themesSettings.light.name}
                </option>
                <option value={themesSettings.dark.name}>
                  {themesSettings.dark.name}
                </option>
              </select>
            </label>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default ThemeSelect;
