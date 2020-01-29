import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';


const styles = theme => ({
	drawerHeader: {
	    display: 'flex',
	    alignItems: 'center',
	    padding: theme.spacing(0, 1, 0, 2),
	    ...theme.mixins.toolbar,
	    justifyContent: 'space-between',
  	},
	content: {
	    flexGrow: 1,
	    padding: theme.spacing(3),
	    transition: theme.transitions.create('margin', {
	      easing: theme.transitions.easing.sharp,
	      duration: theme.transitions.duration.leavingScreen,
	    }),
	    marginLeft: props => -props.drawerWidth,
	    width: props => `calc(100% - ${props.drawerWidth}px)`,
  	},
	contentShift: {
		transition: theme.transitions.create('margin', {
		  easing: theme.transitions.easing.easeOut,
		  duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	}
});

class Main extends Component {
	render() {
		const { classes, drawer } = this.props;
		return (
		<main
	        className={clsx(classes.content, {
	          [classes.contentShift]: drawer,
	        })}
	    >
		      	<div className={classes.drawerHeader} />
		      	{this.props.children}
      	</main>
		);
	}
}

export default withStyles(styles)(Main);