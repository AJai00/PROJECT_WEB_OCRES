import React from 'react';
import * as ReactBootStrap from "react-bootstrap";


const Tab = () => {
  const players = [
    {ID: "1", Nom: "Hamilton", Prénom: "Lewis", Véhicule: "TGS"},
    {ID: "2", Nom: "Jones", Prénom: "Jonny", Véhicule: "TGM"},
    {ID: "3", Nom: "Edwards", Prénom: "Leon", Véhicule: "TGL"},
    {ID: "4", Nom: "Thompson", Prénom: "Stephen", Véhicule: "XLION"},
    {ID: "5", Nom: "Tyson", Prénom: "Mike", Véhicule: "TGE"},
  
  ]

const renderPlayer = (player, index) => {
  return(
    <tr key={index}>
      <td>{player.ID}</td>
      <td>{player.Nom}</td>
      <td>{player.Prénom}</td>
      <td>{player.Véhicule}</td>


    </tr>
  )
}
  
  return (
    <div classname="app">
      <ReactBootStrap.Table striped bordered hover>
  <thead>
    <tr>
    <th>ID</th> 
      <th>Nom</th>
      <th>Prénom</th>
      <th>Véhicule</th>
    </tr>
  </thead>
  <tbody>
    {players.map(renderPlayer)}
  </tbody>
</ReactBootStrap.Table>
    </div>
  );
}

export default Tab;