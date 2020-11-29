import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormUser from './FormUser';
import ListUser from './ListUser';
import './AdminComp.css';


export default function AdminComp() {

  return (
    <div className="container">
      <div >
          <Grid style={{marginTop:"5%"}} container spacing={2}>
              <Grid style={{marginLeft:"15%"}} item xs={4}>
                 <FormUser/> 
              </Grid>
              <Grid item xs={6}>
                <ListUser/>
              </Grid>
          </Grid>

      </div>
    </div>
  );
}