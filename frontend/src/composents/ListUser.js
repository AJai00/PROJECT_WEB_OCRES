import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import "./AdminComp.css";
import axios from "axios";


export default class CheckboxList extends React.Component {

  state = {
    data: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:3420/users/")
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

  

  render() {
    return (
      <List className="listUser">
        {this.state.data.map(value => {
          const labelId = `checkbox-list-label-${value}`;
  
          return (
            <ListItem key={value} role={undefined} dense button >
              <ListItemText id={labelId} primary={`UserID ${value._id} | ${value.location}`} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    );

  }
}