import React, { Component, createContext } from 'react'

export const ThemeContext = createContext();

export default class ThemeProvider extends Component {
  state = {
    isDarkMode: true
  }

  toggleTheme  = () => {
    this.setState(prevState => ({
      isDarkMode: !prevState.isDarkMode
    }));
  }

  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme}}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}
