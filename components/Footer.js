import React from 'react'
import {withStyles} from "@material-ui/core";


const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor:"#444444",
        height:150,
        color:"white",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        marginTop:50
    },
    companyName: {

    }
});

class footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.companyName}>
                    @2018 놀만 엔터테인먼트
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(footer);