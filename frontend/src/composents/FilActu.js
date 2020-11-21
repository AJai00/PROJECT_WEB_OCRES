
import React from"react";

import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';

import ListItemIcon from '@material-ui/core/ListItemIcon';

import Typography from '@material-ui/core/Typography';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(theme => ({
  root: {
    
    width: '50%',
    height: '20em',
    overflowY: 'scroll',
    flexWrap: 'wrap',
    backgroundColor:  "#bbdefb",
    borderRadius: '15%'
  },
  inline: {
    display: 'inline',
  },
}));



function Actu(){
  
const classes = useStyles();
const data = [
  {
      userName: "Monsieur 1",
      report: "Super dashboard merci !"
  },
  {
      userName: "Monsieur 2",
      report: "Excellent ce dashboard me facilite tellement la vie ! ?"
  },
  {
      userName: "Madame 1",
      report: "Blabla numéro 3"
  },
  {
      userName: "Madame 2",
      report: "Blabla numéro 2"
},
  {
    userName: "Joe",
    report: " Je scroll"
},
{
  userName: "Jean",
  report: "Bla Bla"
},
{
  userName: "Jimmy",
  report: "Super !!"
},
{
  userName: "Joey",
  report: "Bonne journée"
},
]

    return(
      <div className={classes.root}>

      {data.map((obj, index) =>(
          <div>
        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <AccountCircleIcon fontSize="large" style={{paddingTop: "10%"}} />
          </ListItemIcon>
          <ListItemText
            primary= {obj.userName}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Report :
                </Typography>
                {obj.report}
              </React.Fragment>
            }
          />
        </ListItem>
      <Divider variant="middle"/> 
              </div>  
  
      ))}
        
      
      </div>
    );
};
export default Actu
