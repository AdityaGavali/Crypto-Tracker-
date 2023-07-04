import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Carousel from './Carousel';
const useStyles = makeStyles(()=>({
    
      bannerContent: {
        height: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      },
      tagline: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      },
}))

function Banner() {
    const classes = useStyles();
    
  return (
    <div >
    <Container className={classes.bannerContent}>
    <div className={classes.tagline}>
    <Carousel/>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 12,
              fontFamily: "Montserrat",
              marginTop: 50
            }}
          >
            Crypto Tracker
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              fontSize: "5xl",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
              
              marginBottom: 15,
            }}
          >
            Stay ahead of the game, track your crypto with ease.
          </Typography>
          
        
        </div>
    </Container>
    
    </div>
  )
}

export default Banner