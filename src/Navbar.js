import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavBarStyles";
import { ThemeContext } from './Contexts/ThemeContext';
import { LanguageContext } from './Contexts/LanguageContext';

const content = {
  english: {
    search: 'Search...',
    flag: 'EN'
  },
  french: {
    search: 'Search in French...',
    flag: 'FR'
  },
  spanish: {
    search: 'Search in Spanish...',
    flag: 'SP'
  },
}

const Navbar = (props) => {
  // Gets values from provoded Context
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const {language} = useContext(LanguageContext);
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position='static' color={isDarkMode ? 'default' : "primary"}>
        <Toolbar>
          <IconButton className={classes.menuButton} color='inherit'>
            <span >{content[language].flag}</span>
          </IconButton>
          <Typography className={classes.title} variant='h6' color='inherit'>
            App Title
                </Typography>
          <Switch onChange={toggleTheme} />
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder={content[language].search}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// Navbar.contextType = ThemeContext;

export default withStyles(styles)(Navbar);
