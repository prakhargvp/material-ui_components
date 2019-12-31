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
		flexWrap: 'wrap',
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column'
		}
	},
	toolbarLinks: {
		'& > *.is-active, & > *:hover': {
		    background: '#fff',
		    color: '#000',
		    borderRadius: 0
		},
		[theme.breakpoints.down('xs')]: {
		display: 'flex',
		flexDirection: 'column',
	    flexGrow: 1,
	    margin: '0 -16px',
	    alignSelf: 'stretch'
		}
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
		         <div className={classes.toolbarLinks}>
			         <Button className="is-active" color="inherit">Home</Button>
			         <Button color="inherit">About</Button>
			         <Button color="inherit">Contact</Button>
			         <Button color="inherit">Login</Button>
		         </div>
			</Toolbar>
		</AppBar>
	);

}
