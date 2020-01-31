import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
	 drawer: {
	    width: props => props.drawerWidth,
	    flexShrink: 0,
	  },
	  drawerPaper: {
	    width: props => props.drawerWidth,
	  },
	  drawerHeader: {
	    display: 'flex',
	    alignItems: 'center',
	    padding: theme.spacing(0, 1, 0, 2),
	    ...theme.mixins.toolbar,
	    justifyContent: 'space-between',
	  },	
});

class SideBar extends Component {
	render() {
		const { 
			classes, 
			handleDrawerClose, 
			theme, 
			drawer } = this.props;
		return (
		 <Drawer
	        className={classes.drawer}
	        variant="persistent"
	        anchor="left"
	        open={drawer}
	        classes={{
	          paper: classes.drawerPaper,
	        }}
	      >
	        <div className={classes.drawerHeader}>
	          <Typography variant="h6" noWrap>
	            SITE NAME
	          </Typography>
	          <IconButton onClick={handleDrawerClose}>
	            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
	          </IconButton>
	        </div>
	        <Divider />
	        {this.props.children}
	      </Drawer>
		);
	}
}

SideBar.defaultProps = {
	drawerWidth: 240,
	drawer: false
};

SideBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
};


export default withStyles(styles, { withTheme: true })(SideBar);