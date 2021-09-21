import React, { Component,useState } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem, ListItemText } from '@material-ui/core/';



export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { userid, licensecode, username, password, email, number, acard }
    } = this.props;


    return (
      <div style={styling}>

      <MuiThemeProvider>
        <React.Fragment>

        
            <h2>CONFIRM DETAILS</h2><br />
            <h3>Step 3 of 5</h3>
            <List style={styling2}>
              <ListItem>
                <ListItemText primary="User Id" secondary={userid} />
              </ListItem>
              <ListItem>
                <ListItemText primary="License Code" secondary={licensecode} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Username" secondary={username} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Password" secondary={password} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem><ListItem>
                <ListItemText primary="Number" secondary={number} />
              </ListItem><ListItem>
                <ListItemText primary="Aadhar Card" secondary={acard} />
              </ListItem>
              
            </List>
            <br />

            <RaisedButton
            
            label="Back"
            primary={true}
            style={styles.button}
            onClick={this.back}
          />

          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
      </div>
    );
  }
}
const styles = {
  button: {
    margin:15
  }
}
const styling2 ={
  paddingLeft:470,
}
const styling ={
  paddingLeft:100,
  paddingTop:70  
}

export default Confirm;
