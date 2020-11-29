import "bootstrap/dist/css/bootstrap.min.css";

import React from 'react';
import './App.css';
import Routes from './routes';

import NavBarDash from './composents/NavBarDash';


import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';



function App() {

  const drawerWidth = 250;

  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      backgroundColor: "",
      
      height:"100%",
      
    },
    content: {
      flexGrow: 2,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: 0,
      height:"100%",
       
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    },
    
  }));

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);


  return (
    <div className={classes.root}>

     
     
      <header className="App-header">
        <NavBarDash/>
      </header>

      <main className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}>
          
          <Routes/>
        
      </main>

    </div>
  );
}

export default App;

