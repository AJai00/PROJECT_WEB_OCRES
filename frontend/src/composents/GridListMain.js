import React from 'react';

import Widget from './Widget';
//import RadarWidget from './RadarWidget';
import Camembert from './Camembert';
import Courbe from './Courbe';
import FilActu from './FilActu';
import Map from './Map';
import Weather from './Weather';

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
   
        cols: '5',
        widget: <Camembert/>
        
    },
    {    
        cols: '2',
        widget: <Courbe/>
    },
    
    {
        cols: '3',
        widget: <FilActu/>
    },
    {
        cols: '2',
        widget: <Map/>
    },
    {
        cols: '3',
    
        widget: <Weather/>
    },
    
    /*{
        
        cols: '2',
        widget: <PieWidget/>
    },*/
];

export default function GridListMain() {
    const classes = useStyles();
    return(
        <div className={classes.root}>
        <GridList cellHeight={630} className={classes.gridList} cols={5}>
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