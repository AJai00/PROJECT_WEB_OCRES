import React from 'react';

import Widget from './Widget';

import Camembert from './Camembert';
import Courbe from './Courbe';
import FilActu from './FilActu';
import Map from './Map';
import Weather from './Weather';
import Tab from './Tab';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
   
    width: "100%",
    height: "100%",
  },
  bar: {
      backgroundColor: "#829baf",
  }
  
}));

const tileData = [
    {
        title: 'Trafic autoroutier france metropolitaine',
        cols: '3',
        widget: <Camembert/>

        
    },
    {
        title: 'Liste des routiers sur le réseau',
        cols: '2',
        widget: <Tab/>
    },
    {    
        title: 'Trafic autoroutier france metropolitaine',
        cols: '2',
        widget: <Courbe/>
    },
    
    {
        title: 'Fil actualité',
        cols: '3',
        widget: <FilActu/>
    },
    {
        title: 'Carte',
        cols: '2',
        widget: <Map/>
    },
    {
        title: 'Météo',
        cols: '3',
    
        widget: <Weather/>
    },
    

];

export default function GridListMain() {
    const classes = useStyles();
    return(
        <div className={classes.root}>
        <GridList cellHeight={580} className={classes.gridList} cols={5}>
            {tileData.map(tile => (
            <GridListTile key={tile.title} cols={tile.cols || 1}>
                <Widget widgetUsed={tile.widget}></Widget>
                <GridListTileBar
                className={classes.bar}
              title={tile.title}
              color={"#829baf"}
            />
            </GridListTile>
            ))}
        </GridList>
    </div>
    )
    
}