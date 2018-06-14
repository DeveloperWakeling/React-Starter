import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Drawer, List, Divider, ListItem } from 'material-ui';

const styles = theme => ({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    toolbar: theme.mixins.toolbar
});

class NavDrawer extends React.Component {
    state = {
        top: false,
        left: false,
        bottom: false,
        right: false,
    };

    componentDidUpdate(prevProps) {
        if (prevProps.toggleDrawer !== this.props.toggleDrawer) {
            this.setState({ left: true });
        }
    }

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const { classes } = this.props;
        window['me'] = this;
        const sideList = (
            <div className={classes.list}>
                <List>
                    <ListItem button>Hello</ListItem>
                    <Divider />
                </List>
            </div>
        );

        return (
            <Drawer variant="permanent" open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                <div className={classes.toolbar} />
                {sideList}
            </Drawer>
        );
    }
}

NavDrawer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavDrawer);