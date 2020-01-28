import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Collapse from '@material-ui/core/Collapse'; 
import Button from '@material-ui/core/Button'; 
import Tabs from '@material-ui/core/Tabs'; 
import Tab from '@material-ui/core/Tab'; 
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Box from '@material-ui/core/Box'; 
import * as _ from 'lodash';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Brightness4Icon from '@material-ui/icons/Brightness4'; 
import Brightness7Icon from '@material-ui/icons/Brightness7'; 
import AppsIcon from '@material-ui/icons/Apps'; 
import SideBarNavLinks from './Sidebar';
import SearchBar from './SearchBar';
import { topics } from './url';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
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
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
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
    marginLeft: -drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }
}));


function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

 const [value, setValue] = React.useState(0);
 const handleChange = (event, newValue) => {
    setValue(newValue);
 };

const [contentTab, setContentTab] = React.useState(1);

  return (
    <div className={classes.root}>
      <CssBaseline />
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
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
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
        <SideBarNavLinks data={topics} />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
      	<div className={classes.drawerHeader} />
      	<SearchBar />

      	{contentTab ? (
      	<Fragment>
	      	<Tabs
	          value={value}
	          onChange={handleChange}
	          variant="scrollable"
	          scrollButtons="on"
	          indicatorColor="primary"
	          textColor="primary"
	          aria-label="scrollable force tabs example"
	        >
	          <Tab label="Item One" icon={<PhoneIcon />} {...a11yProps(0)} />
	          <Tab label="Item Two" icon={<FavoriteIcon />} {...a11yProps(1)} />
	          <Tab label="Item Three" icon={<PersonPinIcon />} {...a11yProps(2)} />
	          <Tab label="Item Four" icon={<HelpIcon />} {...a11yProps(3)} />
	          <Tab label="Item Five" icon={<ShoppingBasket />} {...a11yProps(4)} />
	          <Tab label="Item Six" icon={<ThumbDown />} {...a11yProps(5)} />
	          <Tab label="Item Seven" icon={<ThumbUp />} {...a11yProps(6)} />
	        </Tabs>
	 		<TabPanel value={value} index={0}>
	        	Item One
	      	</TabPanel>
      	</Fragment>
      	): ''}
       
      </main>
    </div>
  );
}