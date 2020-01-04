import React, { Component } from 'react';
import InputBase from '@material-ui/core/InputBase'; 
import Paper from '@material-ui/core/Paper'; 
import { makeStyles } from '@material-ui/core/styles'; 
import IconButton from '@material-ui/core/IconButton'; 
import SearchIcon from '@material-ui/icons/Search'; 

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		padding: '2px 4px 2px 20px',
		alignItems: 'center',
		maxWidth: '600px',
		width: '100%',
		margin: '0 auto',
		marginBottom: theme.spacing(5),
		borderRadius: '100px'
	},
	input: {
		flex: 1
	}
}));

export default function SearchBar(){
	const classes = useStyles();
	return (
		<Paper className={classes.root}>
			<InputBase placeholder="Search" className={classes.input} />
			<IconButton>
				<SearchIcon />
			</IconButton>
		</Paper>
	);
}
