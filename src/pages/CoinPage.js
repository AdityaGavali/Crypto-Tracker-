import { LinearProgress, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';
import { numberWithCommas } from 'C:/Users/Aditya Gavali/Desktop/crpytowatch/cointrackr/src/components/CoinsTable.js';
import { SingleCoin } from '../config/api';
import CoinInfo from "../components/CoinInfo";
import HTMLReactParser from 'html-react-parser';
import { CryptoState } from '../CrpytoContext';

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setCoin(data);
  };

  useEffect(() => {
    fetchCoin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const useStyles = makeStyles()((theme) => ({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
   
    
  }));

  const { classes } = useStyles();

  if (!coin) return <LinearProgress style={{ backgroundColor: "#34c6eb" }} />;

  return (
    <div className={classes.container}>
       <img
          src={coin?.image.large}
          alt={coin?.name}
          height="100"
          style={{  paddingTop : 25}}
        />
         <p style={{fontWeight: "bold"  ,fontFamily: "Montserrat"}}>{coin?.name}</p>
      <CoinInfo coin={coin} />
    </div>
  )
}

export default CoinPage;