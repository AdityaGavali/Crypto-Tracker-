import { CircularProgress, createTheme, ThemeProvider } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { makeStyles } from 'tss-react/mui';
import { chartDays } from '../config/data';
import { CryptoState } from 'C:/Users/Aditya Gavali/Desktop/crpytowatch/cointrackr/src/CrpytoContext.js';
import { HistoricalChart } from "../config/api"
import 'chart.js/auto';
import SelectButton from 'C:/Users/Aditya Gavali/Desktop/crpytowatch/cointrackr/src/components/SelectButton.js';

const CoinInfo = (props) => {
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);
  const { currency } = CryptoState();
  const [flag,setflag] = useState(false);

  const useStyles = makeStyles()((theme) => ({
    container: {
      width: "75%",
      color: "#34c6eb",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 25,
      padding: 40,
      [theme.breakpoints.down("md")]: {
        width: "100%",
        marginTop: 0,
        padding: 20,
        paddingTop: 0,
      },
    },
  }));

  const { classes } = useStyles();

  const fetchHistoricData = async () => {
    const { data } = await axios.get(HistoricalChart(props.coin.id, days, currency));
    setflag(true);
    setHistoricData(data.prices);
  };

  // console.log(historicData);

  useEffect(() => {
    fetchHistoricData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days, currency]);

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  
  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.container}>
        {!historicData | flag===false ? (
          <CircularProgress
            style={{ color: "#34c6eb" }}
            size={250}
            thickness={1}
          />
        ) : (
          <Fragment>
            <Line
              data={{
                labels: historicData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: historicData.map((coin) => coin[1]),
                    label: `Price ( Past ${days} Days ) in ${currency}`,
                    borderColor: "#34c6eb",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
            <div
              style={{
                display: "flex",
                marginTop: 20,
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              {chartDays.map((day) => (
                <SelectButton
                  key={day.value}
                  onClick={() => {setDays(day.value);
                    setflag(false);
                  }}
                  selected={day.value === days}
                >
                  {day.label}
                </SelectButton>
              ))}
            </div>
          </Fragment>
        )}
      </div>
    </ThemeProvider>
  )
}

export default CoinInfo;