import React from 'react'
import { Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import {  makeStyles, createMuiTheme, ThemeProvider, withStyles } from'@material-ui/core/styles';
import Navbar from './navbarMobile';
import Avatar from '../Avatar.png';
import PythonPic from '../pythonlogomaster.png';
import ReactPic from '../react-material-ui-main.jpg';
import CPic from '../cs_logo.png';
import { green, purple } from '@material-ui/core/colors';


const useStyles= makeStyles({
    mainContainer: {
        background: "GhostWhite",
        height: "100%"
    },
    cardContainer: {
        maxWidth: 345,
        margin: "3rem",
        margin: "5rem auto"
    },
    
});

const ColorButton = withStyles((theme) => ({
    root: {
      color: '#DAA520',
      '&:hover': {
        backgroundColor: 'LightGrey',
      },
    },
  }))(Button);

const Portfolio = () => {
    const classes = useStyles()
    return (
    
    
      <Box component="div" className={classes.mainContainer}>     
      <Navbar />
       <Grid container justify="center" alignItems="center">
           {/*Project 1*/}
          <Grid item xs={12} sm={8} md={6}>
           <Card className={classes.cardContainer}>
               <CardActionArea>
                   <CardMedia component="img" alt="Project 1" height="140" image={PythonPic} />
               </CardActionArea>
               <CardContent>
                   <Typography gutterBottom variant="h5">
                       Facial Authentication System
                   </Typography>
                   <Typography variant="body2" color="textSecondary" component="p">
                        Tools used:
                        <br />
                        Python
                        <br />
                        Raspberry Pi
                        <br />
                        <br />
                        This project was my Capstone Project for my Masters Degree, the idea was to create a biometric authentication system for a house. To accomplish this I typed the python script and loaded it onto the Raspberry Pi since the device is small enough to be hidden in a home rather seemlessly. 
                   </Typography>
               </CardContent>
               <CardActions>
                   <ColorButton size="small" color="primary" target="_blank" href="https://github.com/LossonLuckett/FaceAuth/upload">
                       View Source
                   </ColorButton>
                   <ColorButton size="small" color="primary">
                       Demo
                   </ColorButton>
               </CardActions>     
           </Card>
           </Grid>
           <Grid item xs={12} sm={8} md={6}>
           <Card className={classes.cardContainer}>
               <CardActionArea>
                   <CardMedia component="img" alt="Project 3" height="140" image={CPic} />
               </CardActionArea>
               <CardContent>
                   <Typography gutterBottom variant="h5">
                       Traffic Simulator
                   </Typography>
                   <Typography variant="body2" color="textSecondary" component="p">
                        Tools Used:
                        <br />
                        C#
                        <br />
                        NUnit Testing
                        <br />
                        <br />
                        This project was given to me as a coding challenge from a professor of mine, and it turned out to be one of my best works as a programmer. The guidelines of the problem will be in the Read Me since they are too long to post here. I really enjoyed this problem because I was able to implement it as a State design pattern so that we can add to our project without ever changing the existing code! I tested all the functionality using NUnit, in a separate test project.
                   </Typography>
               </CardContent>
               <CardActions>
                   <ColorButton size="small" color="primary" href="https://github.com/LossonLuckett/TrafficSimulation/blob/master/LossonLuckett_Exercise2.zip" target="_blank">
                       View Source
                   </ColorButton>
                   <ColorButton size="small" color="primary" disabled>
                       Demo
                   </ColorButton>
               </CardActions>
           </Card>
           </Grid>
           {/*Project 2*/}
          <Grid item xs={12} sm={8} md={6}>
           <Card className={classes.cardContainer}>
               <CardActionArea>
                   <CardMedia component="img" alt="Project 2" height="140" image={CPic} />
               </CardActionArea>
               <CardContent>
                   <Typography gutterBottom variant="h5">
                       PokeDex
                   </Typography>
                   <Typography variant="body2" color="textSecondary" component="p">
                   Tools used:
                        <br />
                        C#
                        <br />
                        PokeAPI
                        <br />
                        <br />
                        This was a simple project to learn how to consume an API, parse the JSON data into a class object and display that data to a the user.

                   </Typography>
               </CardContent>
               <CardActions>
                   <ColorButton size="small" color="primary" href="https://github.com/LossonLuckett/APIPokedex" target="_blank">
                       View Source
                   </ColorButton>
                   <ColorButton size="small" color="primary" href="https://www.loom.com/share/fbada04a14954ab3b9ea074d3b1faf23" target="_blank">
                       Demo
                   </ColorButton>
               </CardActions>
           </Card>
           </Grid>
           {/*Project 3*/}
          <Grid item xs={12} sm={8} md={6}>
           <Card className={classes.cardContainer}>
               <CardActionArea>
                   <CardMedia component="img" alt="Project 3" height="140" image={ReactPic} />
               </CardActionArea>
               <CardContent>
                   <Typography gutterBottom variant="h5">
                       Portfolio Site
                   </Typography>
                   <Typography variant="body2" color="textSecondary" component="p">
                        Tools Used:
                        <br />
                        ReactJS
                        <br />
                        Materials-UI
                        <br />
                        <br />
                        I built this portfolio site to boost my resume and display my coding skill. This project was my first experience with React or Materials-UI, visiting this webSite should suffice as its demo!
                   </Typography>
               </CardContent>
               <CardActions>
                   <ColorButton size="small" color="primary">
                       View Source
                   </ColorButton>
                   <ColorButton size="small" color="primary" disabled>
                       Demo
                   </ColorButton>
               </CardActions>
           </Card>
           </Grid>
       </Grid>
      </Box>
    )
}

export default Portfolio
