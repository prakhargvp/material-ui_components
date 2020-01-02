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
  },
  nested: {
    // paddingLeft: theme.spacing(4),
  },
  listItem: {
  	paddingTop: 0,
  	paddingBottom: 0,
  	display: 'block',
  },
  listItemText: {
  	justifyContent: 'flex-start',
  	textTransform: 'capitalize',
  	letterSpacing: 0
  }
}));


const topics = [
	{
		id: 1,
		name: "Menu 1",
		order: 1,
		slug: "menu-1",
		children: [
		{ 
			id: 2, name: "sub menu 1 1", slug: "sub-menu1-1", order: 2,
			children: [
				{ id: 9, name: "sub menu 121 ", slug: "sub-menu1-2-1", order: 3 },
				{ id: 10, name: "sub menu 123 ", slug: "sub-menu1-2-3", order: 1 }
			]
		},
		{ id: 3, name: "sub menu 1 2", slug: "sub-menu1-2", order: 3 },
		{ id: 4, name: "sub menu 1 3", slug: "sub-menu1-3", order: 1 }
		]
	},
	{
		id: 5,
		name: "Menu 2",
		order: 2,
		slug: "menu-2",
		children: [
		{ id: 6, name: "sub menu 2 1", slug: "sub-menu2-1", order: 2 },
		{ id: 7, name: "sub menu 2 2", slug: "sub-menu2-2", order: 3 },
		{ id: 8, name: "sub menu 2 3", slug: "sub-menu2-3", order: 1 }
		]
	}
];

function mountList(topics, level=1) {
	const classes = useStyles();
	const { nested,listItem } = classes;
	return (
		_.map(topics, topic => (
			<Fragment key={topic.id}>
				<ListItem disableGutters 
						  component="li" 
						  key={topic.id}  
						  className={listItem}
				>
					<Button fullWidth 
							component={Link} 
							to={`/url/topics/${topic.slug}`}
							className={classes.listItemText}
					>
						{topic.name}
					</Button>
					{_.size(topic.children) > 0 && <Collapse in={true} timeout="auto" unmountOnExit className={nested}>
					<List dense disablePadding component="ul" className={'level-'+level}>{mountList(topic.children, level+1)}</List>
					</Collapse>}
				</ListItem>
			</Fragment>
		))
	);
}

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
  const [open, setOpen] = React.useState(true);
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
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            
          </Typography>
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
        <List dense={true} component="ul" className={"level-0"}> {mountList(topics)} </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
      	<div className={classes.drawerHeader} />
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
       
      </main>
    </div>
  );
}