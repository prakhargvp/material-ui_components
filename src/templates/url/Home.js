import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Header from './Header';
import SideBar from './SideBar';
import TopicList from './TopicList';
import Main from './Main';
import SearchBar from './SearchBar';
import { topics } from './url';

const styles = theme => ({
  root: {
    display: 'flex',
  }
});

class Home extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = { 
	  	drawerOpen: false,
	  	drawerWidth: 240
	  };
	}
	handleDrawerOpen() {
		this.setState({ drawerOpen: true });
	};
	handleDrawerClose() {
	    this.setState({ drawerOpen: false });
	};	
	render() {
		const { drawerOpen, drawerWidth } = this.state;
		const { classes } = this.props;
		
		return (
			<div className={classes.root}>
				<Header drawerWidth={drawerWidth} 
						drawer={drawerOpen}
						handleDrawerOpen={this.handleDrawerOpen.bind(this)}	
				/>
				<SideBar 
					drawerWidth={drawerWidth}
					drawer={drawerOpen}
					handleDrawerClose={this.handleDrawerClose.bind(this)}
				>
					<TopicList data={topics} />
				</SideBar>
				<Main
					drawerWidth={drawerWidth} 
					drawer={drawerOpen}
				>
					<SearchBar />
				</Main>
			</div>
		);
	}
}

export default withStyles(styles)(Home);