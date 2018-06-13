import React, { Component } from 'react';
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
      zIndex: theme.zIndex.drawer + 1,
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
        <AppBar position="absolute" style={{ flexGrow: 1 }} className={classes.appBar}>
          <Toolbar>
            <Typography style={{ flex: 1, textAlign: 'center' }} variant="title" color="inherit">Yearbook as a Service</Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        {/* <Drawer variant="permanent" classes={{ paper: classes.paper }}>
          <div className={classes.toolbar} />
          <List>
            <ListItem>Hello</ListItem>
          </List>
        </Drawer> */}
        <div>
          <div className={classes.toolbar} />
          <Grid container spacing={16}>

          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(this.styles)(App);
