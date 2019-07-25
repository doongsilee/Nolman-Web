import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, Tab, Tabs} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import Link from 'next/link'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
});

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            Nolman Beta
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
