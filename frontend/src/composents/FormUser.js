




import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';

import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import GroupIcon from '@material-ui/icons/Group';

import MenuItem from '@material-ui/core/MenuItem';

import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    backgroundColor: "#bbdefb",
    borderWidth: 5,
    borderStyle:"inset",
    borderColor: "#829baf",
    paddingBottom: 5,
    paddingTop: 5,
    paddingLeft:5,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));



export default function FormUser() {
  const classes = useStyles();


  return (
    <div>
      <Box className={classes.margin}>
        
      <Grid container spacing={1} alignItems="flex-end" style={{paddingTop: "15px",}} >
       
            <Grid item>
                <PermContactCalendarIcon />
            </Grid>

          <Grid item>
            <InputLabel>ID</InputLabel>
            <TextField></TextField>
          </Grid>
          
        </Grid>


        <Grid container spacing={1} alignItems="flex-end" style={{paddingTop: "15px",}} >
        
           <Grid item>
              <GroupIcon />
            </Grid> 

          <Grid item>
            <InputLabel>Nom</InputLabel>
            <TextField></TextField>
          </Grid>
          
        </Grid>

        <Grid container spacing={1} alignItems="flex-end" style={{paddingTop: "15px",}} >
        
          <Grid item>
              <GroupIcon />
          </Grid>

          <Grid item>
            <InputLabel>Prénom</InputLabel>
            <TextField></TextField>
          </Grid>
          
        </Grid>

        <Grid container spacing={1} alignItems="flex-end" style={{paddingTop: "15px",}}>
          

            <Grid item>
            <LocalShippingIcon />
            </Grid>

          <Grid item>
            <InputLabel id="label-persons">Vehicule :</InputLabel>
            <Select
              labelId=""
              id=""
              style={{ minWidth: 120}}
            >
              <MenuItem value={1}>TGS</MenuItem>
              <MenuItem value={2}>TGM</MenuItem>
              <MenuItem value={3}>TGL</MenuItem>
              <MenuItem value={4}>XLION</MenuItem>
              <MenuItem value={5}>TGE</MenuItem>
            </Select>

           
          </Grid>
        </Grid>
        
        <Button style={{paddingTop: "15px",}} >Add new user</Button>
        <Button style={{paddingTop: "15px",}} >Delete user</Button>
        <Button style={{paddingTop: "15px",}} >Modify user</Button>

      </Box>
    </div>
  );
}
