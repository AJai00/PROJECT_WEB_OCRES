
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Compteur from './composents/Compteur';
import ShowHide from './composents/ShowHide';
import Taille from './composents/Taille';
import Actu from './composents/FilActu';
import Meteo from './composents/Weather';

import Form from "./composents/form.component";
import Weather from "./composents/weather.component";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
   <div className="App">
    


    <Compteur/>
     <hr/>
     <ShowHide/>
     <hr/>
     <Taille/>
     <hr/>
     <Actu/>
     <hr/>
     <Meteo/>
   </div>
  );
}

export default App;
/*<Compteur/>
     <hr/>
     <ShowHide/>
     <hr/>
     <Taille/>
     <hr/>
     <Actu/>
     <hr/>
     */