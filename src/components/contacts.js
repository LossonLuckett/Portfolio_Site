import React from 'react';
import {makeStyles, withStyles} from "@material-ui/core/styles";
import { TextField, Grid, Box, Typography, } from "@material-ui/core";
import Navbar from "./navbarMobile";



const useStyles = makeStyles(theme=>({
    form:{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute"
    },
    button: {
        marginTop: "1rem",
        color: "Grey",
        borderColor: "Grey"
    },
}))


const InputField = withStyles({
    root:{
        "& label.Mui-focused": {
            color: "GoldenRod"
        },
        "& label": {
            color: "GoldenRod"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "GoldenRod"
            },
        },
        "&:hover fieldset": {
            borderColor: "GoldenRod",
        },

    },
})(TextField);

const Contacts = () => {

    
    const classes = useStyles()
    

    return (
        <>
        <Navbar />
        <Box component="div" style={{background: "GhostWhite", height: "100vh"}}>
            <Grid container justify="center">
                <Box component="form" className={classes.form}>
                    <Typography variant="h5" style={{color: "Grey", textAlign: "center", textTransform: "uppercase"}}>
                        Contact Me 
                    </Typography>
                    <Typography variant="h5" style={{ color: "GoldenRod", textAlign: "center"}}>
                        Email: <a href="mailto:lossonluckett1@gmail.com" target="_blank" rel="noopener noreferrer">lossonluckett1@gmail.com</a>
                        <br/>
                        Phone Number: (616)914-7074
                    </Typography>
                 
                    
                </Box>
            </Grid>
        </Box>
        </>
    );
}

export default Contacts
