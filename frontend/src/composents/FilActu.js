
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
    
    width: '100%',
    height: '35em',
    overflowY: 'scroll',
    flexWrap: 'wrap',
   
  },
  inline: {
    display: 'inline',
  },
}));



function Actu(){
  
const classes = useStyles();
const data = [
  {
      userName: "Bill",
      report: "Super dashboard merci !"
  },
  {
      userName: "Fred",
      report: "J'ai bien roulé aujourd'hui !"
  },
  {
      userName: "Benoît",
      report: "Blabla numéro 3"
  },
  {
      userName: "Malik",
      report: "Plus que 2h30"
},
  {
    userName: "Joe",
    report: " Cette radio est géniale"
},
{
  userName: "Jeanne",
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
{
  userName: "Mike",
  report: "Qu'est ce que je vais bien pouvoir manger au dîner ?"
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
