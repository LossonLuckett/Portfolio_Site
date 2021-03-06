import React from 'react'
import NavbarMobile from './navbarMobile';
import Header from './header';
import Particles from 'react-particles-js';
import { makeStyles } from "@material-ui/core";




const useStyles = makeStyles({
    particlesCanva: {
        position: "absolute"    
    }
})


const Home = () => {
    const classes = useStyles()
    return (
        <div>   <NavbarMobile />
                <Header />
                <Particles
                   canvasClassName={classes.particlesCanva}
                    params={{
                        particles:{
                            number:{
                                value: 45,
                                density: { 
                                    enable: true,
                                    value_area: 900
                                }
                            },
                            shape: {
                                type: "circle",
                                stroke: {
                                        width: 1,
                                        color: "RebeccaPurple"
                                    }                                
                                },
                                size: {
                                    value: 8,
                                    random: true,
                                    anim: {
                                        enable: false,
                                        speed: 4,
                                        size_min:0.1,
                                        sync: true

                                    }
                                },
                                opacity:{
                                    value: 1,
                                    random: true,
                                    anim:{
                                        enable: true,
                                        speed: 1,
                                        opacity_min: 0,
                                        sync: false
                                    }
                                }
                            }


                        }
                } />
        </div>
    )
}

export default Home
