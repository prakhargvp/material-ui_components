import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Brightness4Icon from '@material-ui/icons/Brightness4'; 
import Brightness7Icon from '@material-ui/icons/Brightness7'; 
import AppsIcon from '@material-ui/icons/Apps'; 
import clsx from 'clsx';

const styles = (theme, props) => {
	return ({
	  appBar: {
	    transition: theme.transitions.create(['margin', 'width'], {
	      easing: theme.transitions.easing.sharp,
	      duration: theme.transitions.duration.leavingScreen,
	    }),
	  },
	  appBarShift: {
	    width: props => `calc(100% - ${props.drawerWidth}px)`,
	    marginLeft: props => props.drawerWidth,
	    transition: theme.transitions.create(['margin', 'width'], {
	      easing: theme.transitions.easing.easeOut,
	      duration: theme.transitions.duration.enteringScreen,
	    }),
	  },
	  menuButton: {
	    marginRight: theme.spacing(2),
	  },
	  hide: {
	    display: 'none',
	  }
	})
};

class Header extends Component {
	render() {
		const { classes, handleDrawerOpen, drawer: open } = this.props;
		console.log(open);
		return (
		<AppBar
	        position="fixed"
	        className={clsx(
	          classes.appBar, 
	          { [classes.appBarShift]: open }
	        )}
	      >
	        <Toolbar style={{ justifyContent: 'space-between' }}>
	         <div>
		          <IconButton
		            color="inherit"
		            aria-label="open drawer"
		            onClick={handleDrawerOpen}
		            edge="start"
		            className={clsx(classes.menuButton, open && classes.hide)}
		          >
		            <MenuIcon />
		          </IconButton>
	          </div>
	     	  <div>

	     	  	<IconButton
		            aria-label="Toggle light/dark theme"
		            color="inherit"
		          >
		            {1 ==1 ? <Brightness4Icon /> : <Brightness7Icon />}
		        </IconButton>
		        <IconButton
		            aria-label="Apps"
		            color="inherit"
		          >
					<AppsIcon />
		        </IconButton>
		        <IconButton
		            aria-label="account of current user"
		            aria-controls="menu-appbar"
		            aria-haspopup="true"
		            color="inherit"
		          >
		            <AccountCircle />
		        </IconButton>

	          </div>
	        </Toolbar>
	      </AppBar>
		);
	}
}

Header.propTypes = {
};

Header.defaultProps = {
	drawerWidth: 240
};

export default withStyles(styles)(Header);