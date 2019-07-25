import React from "react";
import Layout from "../components/Layout";
import Link from 'next/link'
// import { Keyboard } from "@material-ui/icons";

import { withStyles } from '@material-ui/core/styles';
import classnames from "classnames";
import PropTypes from "prop-types";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    places: {
        textAlign:"center",
        display: "flex",
        justifyContent: "space-around",
        flexWrap:"wrap",
        maxWidth:500,
        width: "100%",
        margin:"auto"
    },
    place : {
        border: [
            [1, 'solid', 'black']
        ],
        boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);",
        borderRadius : 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        width:"40%",
        height:"auto",
        marginTop:20,
        // width: calc(100%  / 3);
        "&:hover": {
            boxShadow: "0 20px 30px rgba(0,0,0,0.19), 0 15px 15px rgba(0,0,0,0.23);",
        }
    },
    iconImg: {
        width:"50%",
        height:"auto",
        margin:"auto",
        paddingTop:10
    }


});


class Index extends React.Component {
    constructor(props, context) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (
            <Layout>
                <div className={classes.places}>
                    <Link href="/searchPlaces">
                        <div className={classes.place}>
                            <img className={classes.iconImg} src="../static/noun_Mouse_1881464.png" alt=""/>
                            <p> PC방</p>
                        </div >
                    </Link>
                    <div className={classes.place}>
                        <img className={classes.iconImg} src="../static/noun_Billiards_2038718.png" alt=""/>
                        <p> 당구장</p>
                    </div>
                    <div className={classes.place}>
                        <img className={classes.iconImg} src="../static/noun_karaoke_1842877.png" alt=""/>
                        <p> 노래방</p>
                    </div>
                    <div className={classes.place}>
                        <img className={classes.iconImg} src="../static/noun_Bowling_777186.png" alt=""/>
                        <p> 볼링장</p>
                    </div>
                </div>
            </Layout>
        );
    }
}

Index.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index)