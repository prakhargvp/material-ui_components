import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography'; 

const useStyles = makeStyles( theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column', 
		alignItems: 'center',
		'& > *': {
			//margin: theme.spacing(1)
		}
	}
}));
export default function test() {
	const classes = useStyles();
	return (
		<Box className={classes.root}>
			<Typography variant="h3" gutterBottom>Navigation</Typography>
			<Link to="/header">
				<Button>Headers</Button>
			</Link>
			<Link to="/signin">
				<Button>Singin Page</Button>
			</Link>
		</Box>
	)
}