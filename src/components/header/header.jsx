/*
  This file defines the header of the application
*/

import React, { useContext } from 'react';
import { Store } from '../../state/store';
import { SET_POP_UP } from '../../actions/actionTypes';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton
} from '@material-ui/core';
import { isWhiteSpaceLike } from 'typescript';



/*-------------------- Styled components --------------------*/

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 3,
    gridArea: "header",
  },
  // styles the complete title of the application, ProtoGraphQL
  menuButton: {
    marginRight: theme.spacing(2)
  },
  // styles the Proto part of the title of the application, ProtoGraphQL
  title: {
    flexGrow: 2
  },
  header: {
    backgroundColor: "#324353",
  },
  // style the GraphQL part of the title of the application, ProtoGraphQL
  pink: {
    color: "#DD399C",
  },
  // style the ReadMe and Export buttons in the header
  button: {
    color: 'white',
    backgroundColor: '#324353',
    border: '1px solid white',
    marginRight: '10px',
    minWidth: '50px',
    "&:hover": {
      backgroundColor: '#EEEFF0',
      transform: 'scale(1.01)',
      color: '#324353',
      border: '1px solid #324353',
    }
  },
  // style the GitHub button in the header
  anchor: {
    color: 'white',
    "&:hover": {
      color: '#324353',
    }
  },
  // style the text associated with each button on the right side of the header
  label: {
    display: 'inline-block',
    fontSize: '10px',
    paddingLeft: '5px',
  }
}));

/*-------------------- Functional Component --------------------*/

function Header() {
  // sets the classes to be used in the header, as defined on line 22
  const classes = useStyles();
  /*
  -> connects the application to the context (utilized by Hooks in React) and facilitates the ability to
      update the context of the application
  -> the context is initialized by useContext() and specified by Store which is found
      in /components/state/store.jsx
  */
  const { state: { popUp }, dispatch } = useContext(Store);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar >
          <IconButton edge="start" className={classes.menuButton} style={{ padding: '0px 8px' }} aria-label="Menu">
            <img src="./public/assets/pictures/ProtoGraphQLLogo.png" height="50" />
          </IconButton>
          <Typography variant="h3" className={classes.title}>
            <span>Proto</span>
            <span className={classes.pink}>GraphQL</span>
          </Typography>
          <Button color="inherit" title="Readme" className={classes.button} onClick={() => { dispatch({ type: SET_POP_UP, payload: 'welcome' }) }}>
            <i className="fas fa-file-alt fa-3x" style={{ fontSize: "33px" }}></i>
            <p className={classes.label}>Readme</p>
          </Button>
          <Button color="inherit" title="Export Project" className={classes.button} onClick={() => { dispatch({ type: SET_POP_UP, payload: 'export' }) }}>
            <i className="fas fa-file-download" style={{ fontSize: "32px" }}></i>
            <p className={classes.label}>Export</p>
          </Button>
          <Button color="inherit" title="Github Homepage" className={classes.button}>
            <a className={classes.anchor} style={{ display: 'flex', textDecoration: 'none', alignItems: 'center' }} color="inherit" href="https://github.com/oslabs-beta/protographql" target="_blank">
              < i className="fab fa-github fa-3x" style={{ fontSize: "30px" }}></i>
              <p className={classes.label}>Github</p>
            </a>
          </Button>
        </Toolbar>
      </AppBar >
    </div >
  );
}

export default Header;
