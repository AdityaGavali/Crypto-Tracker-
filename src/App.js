
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import CoinPage from './pages/CoinPage';
import { makeStyles  } from '@material-ui/core';
const useStyles = makeStyles(()=>({
  Ap:{
  backgroundColor: "#14161a",
  color: "white",
  minHeight: '100vh'
  },
  }));
function App() {
  
  const classes = useStyles();
  return (
    <div className={classes.Ap}>
     <Header/>
     <Routes>
     <Route path='/' Component={Home} exact/>
     <Route path='/coins/:id' Component={CoinPage}/>
     </Routes>
      
    </div>
  );
}

export default App;
