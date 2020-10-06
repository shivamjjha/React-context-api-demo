import React, { Component, createContext } from 'react'

export const LanguageContext = createContext();

export default class LanguageProvider extends Component {
  state = {
    language: 'french'
  }

  changeLanguage = (e) => {
    this.setState({language: e.target.value});
  }

  render() {
    return (
      <>
        <LanguageContext.Provider value={{...this.state, changeLanguage: this.changeLanguage}}>
          {this.props.children}
        </LanguageContext.Provider>
      </>
    )
  }
}
