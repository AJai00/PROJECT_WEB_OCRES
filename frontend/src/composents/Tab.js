import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import axios from 'axios';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import "./Tab.css";



class Tab extends React.Component {
  

  state = {

        /*id:'',
        nom:'',
        prenom:'',
        vehicule:'',
        valeurs: undefined*/
        data: []
  };

  componentDidMount(){
   // this.downloadData();
   axios
      .get("http://localhost:3420/api/")
      .then(response => {

        const newData = response.data;
        console.log(newData);

        const newState = Object.assign({}, this.state, {
          data: newData
        });

        this.setState(newState);
      })
      .catch(error => console.log(error));


}

  
  render () {

    return (
      <div className="listMembers">
    {this.state.data.map(value => {
      const labelId = `checkbox-list-label-${value}`;

      

    return (




<ReactBootStrap.Table striped bordered hover>
  
  <thead>
    <tr>
      <th>Nom/Prénom/Véhicule/ID</th>  
      
    </tr>
  </thead>

  <thead>

   <ListItem key={value} role={undefined} dense button >
              <ListItemText id={labelId} secondary={`${value.nom} | ${value.prenom} | ${value.vehicule}| UserID ${value._id} `} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem> 

    


  </thead>
  

</ReactBootStrap.Table>

    


     


  );
})}
</div>
  );
}

}export default Tab;