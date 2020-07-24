import React from 'react'
import { makeStyles } from "@material-ui/core";
import {Typography, Avatar, Grid, Box } from '@material-ui/core';
import avatar from "../Avatar.png";
import Typed from "react-typed";


//CSS STYLES
const useStyles = makeStyles(theme => ({
    avatar:{
        width: theme.spacing(30),
        height: theme.spacing(30),
        margin: theme.spacing(5)
    },
    title:{
        color: "MintCream"
    },
    subtitle:{
        color: "GoldenRod",
        marginBottom: "3rem"
    },
    typedContainer:{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}));

const Header = () => {

    const classes = useStyles();
    return (
       <Box className={classes.typedContainer}>
           <Grid container justify="center">
                <Avatar className={classes.avatar} src={ avatar } alt="Avi" />
           </Grid>
           <Typography className={classes.title} variant="h4">
                <Typed strings={["Losson Luckett"]} typedSpeed={40} />
           </Typography>
           <br />
           <Typography className={classes.subtitle} variant="h5">
               <Typed strings={["Web Design", "Software Development", "Artificial Intelligence"]} typeSpeed={40} backSpeed={60} loop/>
           </Typography>
       </Box>
    );
}

export default Header;
