import React from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {Typography, Box, Button, Link } from "@material-ui/core"
import NavbarMobile from './navbarMobile';


const useStyles = makeStyles(theme=>({
    mainContainer:{
        background: "GhostWhite"
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: " 0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid GoldenRod",
            right: "40px",
            top: 0
        },
        "&:after" :{
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]:{
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid GoldenRod",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute"
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "GoldenRod GoldenRod transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "GoldenRod"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent GoldenRod GoldenRod"
            }
        }
    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: " 0 3rem 0 auto",
        fontSize: "1.8rem", 
        background: "GoldenRod",
        color: "white",
        lineHeight: 1,
        padding: "0.5 rem 0 1rem",
        "&:before": {
            display: "none"
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto"
            }
        },
        "&:nth-of-type(2n):before": {
            display: "none"
        }

    },
    heading: {
        color: "GoldenRod",
        padding: "3rem",
        textTransform: "uppercase",
    },
    subHeading: {
        color: "SlateGrey",
        padding: "0",
        textTransform: "uppercase"
    },
}));

const Resume = () => {
    const classes = useStyles();
    return (
        <>
        <NavbarMobile />
            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h4" align="center" className={classes.heading}>
                    Work Experience
                </Typography>
                <Typography variant="h5" align="center" className={classes.heading}>
                    <a target="_blank" href="https://drive.google.com/file/d/0B0JiynH-uCcGQlFZRDhVZWw3bmZOb1JJY2RjcEs0NGJrN1BZ/view?usp=sharing">
                    Copy of Resume
                    </a>
                </Typography>
                
                <Box component="div" className={classes.timeLine}>
                <Typography variant ="h2" 
                     className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2016</Typography>
                <Box component="div" className={classes.timeLineItem}>
                         <Typography variant="h5" align="center" className={classes.subHeading}>
                             Customer Support Technician
                         </Typography>
                         <Typography variant="body1" align="center" style={{color: "GoldenRod"}}>
                             Davenport University
                         </Typography>
                         <Typography variant="subtitle1" align="center" style={{color: "LightSlateGrey"}}>
                             During my time as a Support Tech my daily activites consisted of assiting Staff, Students, and Faculty with any issues that they were having with our software, this included troubleshooting, software installs, and user account management. I believe this position was a great building block for my career, because it taught me the importance of being able to learn quickly and independently. Most importantly, it showed me that treating all your customers and team members the utmost repsect and holding your self accountable to them will always the best results.
                         </Typography>                    
                </Box>
                <Typography variant ="h2" 
                     className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2017</Typography>
                <Box component="div" className={classes.timeLineItem}>
                         <Typography variant="h5" align="center" className={classes.subHeading}>
                             IT Training Coordinator
                         </Typography>
                         <Typography variant="body1" align="center" style={{color: "GoldenRod"}}>
                             Davenport University
                         </Typography>
                         <Typography variant="subtitle1" align="center" style={{color: "LightSlateGrey"}}>
                         In this role I have been able to make the daily workflow of our employees smoother, by offering more efficient methods of completing their daily tasks.  As well as keeping our student body up to date with how to interact with and navigate our ever-updating software systems. I accomplish these tasks by creating instructive documentation for our IT department, Staff, and students. I also produce training videos on how to use new or updated software, using Camtasia and Loom. 
                         </Typography>                    
                </Box>
                </Box>
                <Typography variant="h4" align="center" className={classes.heading}>
                    Education
                </Typography>
                <Box component="div" className={classes.timeLine}>
                <Typography variant ="h2" 
                     className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2017</Typography>
                <Box component="div" className={classes.timeLineItem}>
                         <Typography variant="h5" align="center" className={classes.subHeading}>
                             Bachelors of Science (Computer Science)
                         </Typography>
                         <Typography variant="body1" align="center" style={{color: "GoldenRod"}}>
                             Davenport University
                         </Typography>                  
                </Box>
                <Typography variant ="h2" 
                     className={`${classes.timeLineYear} ${classes.timeLineItem}`}>2019</Typography>
                <Box component="div" className={classes.timeLineItem}>
                         <Typography variant="h5" align="center" className={classes.subHeading}>
                             Master of Science (Computer Science)
                         </Typography>
                         <Typography variant="body1" align="center" style={{color: "GoldenRod"}}>
                             Davenport University
                         </Typography>                    
                </Box>
                </Box>
            </Box>
        </>
    )
}

export default Resume
