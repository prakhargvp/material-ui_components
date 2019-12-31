import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'; 
import Toolbar from '@material-ui/core/Toolbar'; 
import Typography from '@material-ui/core/Typography'; 
import IconButton from '@material-ui/core/IconButton'; 

export default class Header extends Component {
	render() {
		return (
			<AppBar position="static">
				<Toolbar variant="regular">
					 <Typography variant="h6">
			            SITENAME
			         </Typography>
			         <IconButton>
			         	
			         </IconButton>
				</Toolbar>
			</AppBar>
		);
	}
}
