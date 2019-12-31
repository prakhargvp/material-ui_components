import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles'; 
import AppBar from '@material-ui/core/AppBar'; 
import Toolbar from '@material-ui/core/Toolbar'; 
import Typography from '@material-ui/core/Typography'; 
import IconButton from '@material-ui/core/IconButton'; 
import Button from '@material-ui/core/Button'; 

const useStyles = makeStyles(theme => ({
	toolbar: {
		justifyContent: 'space-between',
		flexWrap: 'wrap' 
	}
}));

export default function Header(){

	const classes =  useStyles();
	return (
		<AppBar position="static">
			<Toolbar variant="regular" className={classes.toolbar}>
				 <Typography variant="h6">
		            SITENAME
		         </Typography>
		         <div>
			         <Button color="inherit">Home</Button>
			         <Button color="inherit">About</Button>
			         <Button color="inherit">Contact</Button>
			         <Button color="inherit">Login</Button>
		         </div>
			</Toolbar>
		</AppBar>
	);

}
