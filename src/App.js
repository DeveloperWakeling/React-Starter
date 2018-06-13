import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { Button, Grid, AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText } from 'material-ui';
import { withStyles } from '@material-ui/core';



class App extends Component {

  constructor(props) {
    super(props);
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
    drawerPaper: {
      position: 'relative',
      width: this.drawerWidth,
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing.unit * 3,
      minWidth: 0, // So the Typography noWrap works
    },
    toolbar: theme.mixins.toolbar,
  });

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Typography style={{ flex: 1, textAlign: 'center' }} variant="title" color="inherit">Yearbook as a Service</Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <h2>Does this work</h2>
          </Grid>
        </Grid>
      </div>
    );
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(this.styles)(App);
