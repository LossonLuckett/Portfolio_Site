import React, {useState} from 'react'
import {AppBar, Toolbar, ListItem, IconButton, ListItemText, ListItemIcon, Avatar, makeStyles, Divider, List, Typography, Box, Tabs, Tab, Paper} from "@material-ui/core";
import { ArrowBack, Menu, AssignmentInd, Home, Apps, ContactMail, Clear} from  "@material-ui/icons";
import MobileRightMenuSlider from "@material-ui/core/Drawer"
import avatar from "../Avatar.png";
import {Link} from 'react-router-dom';



// CSS Styles
const useStyles = makeStyles(theme=>({
    menuSliderContainer:{
        width: 250,
        background: "GhostWhite",
        height: "100%", 
    },
    avatar:{
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listIconItem:{
        color: "GoldenRod"
    }
}));

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume",
        listPath: "/Resume"
    },
    {
        listIcon: <Apps />,
        listText: "Portfolio",
        listPath: "/Portfolio"
    
    },
    {
        listIcon: <ContactMail />,
        listText: "Contacts",
        listPath: "/contacts"
    }
];

const NavbarMobile = () => {

    const [state, setState] = useState({
        right: false
    });

    const toggleSlider = ((slider, open ) => () => {
        setState({...state, [slider]: open});
    });

    const classes = useStyles()

    const sideList = slider => (
        <Box className={classes.menuSliderContainer} component="div" onClick={toggleSlider(slider, false)}> 
        <Avatar className= {classes.avatar} src={avatar} alt="Avi" />
       <List>
           {menuItems.map((lsItem, key) => (
           <ListItem button key={key} component={Link} to={lsItem.listPath}>
               <ListItemIcon className={classes.listIconItem}>
                   { lsItem.listIcon }
               </ListItemIcon>
               <ListItemText className={classes.listIconItem} primary={lsItem.listText} />     
           </ListItem>
           ))}
       </List>
      </Box>
    );
    return (
         <>
            <Box component="nav">
                <AppBar position="static" style={{background: "#FFFFFF"}}>
                        <Toolbar>
                            <IconButton onClick={toggleSlider("right", true)}>
                                <Menu style={{color: "GoldenRod"}}/>
                            </IconButton>                      
                            <MobileRightMenuSlider anchor="right" open = {state.right} onClose={toggleSlider("right", false)}>
                                {sideList("right")}
                            </MobileRightMenuSlider>
                        </Toolbar>
                    </AppBar>
            </Box>    
           
        </>
    

    )
}

export default NavbarMobile;
