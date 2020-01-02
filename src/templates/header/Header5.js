import React, { Component } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles'; 
import AppBar from '@material-ui/core/AppBar'; 
import Toolbar from '@material-ui/core/Toolbar'; 
import Typography from '@material-ui/core/Typography'; 
import IconButton from '@material-ui/core/IconButton'; 
import Button from '@material-ui/core/Button'; 
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase'; 

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
	},
	search: {
		display: 'flex',
		background: fade(theme.palette.common.white, 0.15),
		'&:hover': {
	      backgroundColor: fade(theme.palette.common.white, 0.25),
    	},
    	borderRadius: theme.shape.borderRadius,
    	padding: '2px',
    	[theme.breakpoints.down('xs')]: {
    		alignSelf: 'stretch',
    		borderRadius: 0,
    		marginBottom: theme.spacing(1),
    		marginTop: theme.spacing(1)
    	}
	},
	searchIcon: {
		width: theme.spacing(7),
		display: 'flex',
	    justifyContent: 'center',
	    alignItems: 'center'
	},
	searchInput: {
		flexGrow: 1
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
		         <div className={classes.search}>
		         	<div className={classes.searchIcon}>
		         		<SearchIcon />
		         	</div>
		         	<InputBase className={classes.searchInput} placeholder="Search..." />
		         </div>
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
