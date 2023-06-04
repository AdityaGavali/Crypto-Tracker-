import { AppBar, Container, createTheme, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from 'tss-react/mui';
import { useNavigate } from 'react-router-dom'
import { CryptoState } from 'C:/Users/Aditya Gavali/Desktop/crpytowatch/cointrackr/src/CrpytoContext';
const useStyles = makeStyles()(() => ({
  title: {
    flex: 1, 
    // color: "#34c6eb",
    color:"white",
    fontFamily: 'Montserrat',
    fontWeight: "bold",
    cursor: "pointer",
  }
}));
const Header = () => {
  const {classes} = useStyles();

  const navigate = useNavigate();

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const { currency, setCurrency } = CryptoState();

  // console.log(currency);
  
  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' style={{backgroundColor:"#324ca8"}} position='static'>
      <Container>
        <Toolbar>
          <Typography onClick={() => navigate("/")} variant='h6' className={classes.title}>🪙Crypto Tracker</Typography>

          <Select variant="outlined" style={{
            width: 100, 
            height: 40,
            marginRight: 15,
            color: "white"
          }}
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"INR"}>INR</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  )
}

export default Header