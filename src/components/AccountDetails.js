import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField
} from '@material-ui/core';

class AccountDetails extends React.Component{

  constructor(){
    super();
  }

  componentDidMount(){

    function getAccDetails(){
			var request = require('request');
            var options = {
                'method': 'GET',
                'url': 'https://enantra.org/api/user/getuserdetails',
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'auth': sessionStorage.getItem("auth")
                }
            };
            request(options, function (error, res) { 
                if (error){
                    console.log(error);
                }else{
                  var jsonD = JSON.parse(res.body).response[0];
                  setData(jsonD.eid, jsonD.name, jsonD.email, jsonD.phone);
                }
            });
		  }

    setData("id", "name", "email", "phone");
    getAccDetails();

    function setData(id, name, email, phone){
      document.getElementById("id").value = id;
      document.getElementById("id").readOnly = true;

      document.getElementById("name").value = name;
      document.getElementById("name").readOnly = true;

      document.getElementById("email").value = email;
      document.getElementById("email").readOnly = true;

      document.getElementById("phone").value = phone;
      document.getElementById("phone").readOnly = true;
    }

  }

  render(){
    return (
      <form autoComplete="off" noValidate style={{margin: "10px"}}>
        <h3>Profile</h3>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField fullWidth label="Enantra ID" margin="dense" name="firstName" id="id" variant="outlined" />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField fullWidth label="Name" margin="dense" name="lastName" id="name" variant="outlined" />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField fullWidth label="Email Address" margin="dense" name="email"  id="email" variant="outlined"/>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField fullWidth label="Phone Number" margin="dense" name="phone"  id="phone" variant="outlined"/>
            </Grid>
          </Grid>
        </CardContent>
      </form>
  );
  }

}

export default AccountDetails;