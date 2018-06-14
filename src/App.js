import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { Button, AppBar, Toolbar, Typography } from 'material-ui';
import { withStyles } from '@material-ui/core';
import NavDrawer from './components/navDrawer';

class App extends Component {

  constructor() {
    super();
    this.state = { openDrawer: false }
  }
  drawerWidth = 200;

  styles = theme => ({
    root: {
      flexGrow: 1,
      height: 430,
      zIndex: 1,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
    },
    appBar: {
      flexGrow: 1
    },
    toolbarTitle: {
      flex: 1,
      textAlign: 'center'
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing.unit * 3,
      minWidth: 0, // So the Typography noWrap works
    },
    toolbar: theme.mixins.toolbar
  });

  openDrawer = () => {
    this.setState({ toggleDrawer: !this.state.toggleDrawer });
  }


  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar} style={{zIndex: 9999}}>
          <Toolbar>
            <Typography style={{ flex: 1, textAlign: 'center' }} variant="title" color="inherit">Yearbook as a Service</Typography>
            <Button color="inherit" onClick={this.openDrawer}>Login</Button>
          </Toolbar>
        </AppBar>
        {/* Drawer For Navigation */}
        <NavDrawer toggleDrawer={this.state.toggleDrawer} />
        {/* Main Content Here */}
      </div>
    );
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(this.styles)(App);
