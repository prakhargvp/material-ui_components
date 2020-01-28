import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';
import SearchBar from './SearchBar';
import { topics } from './url';

class Home extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = { 
	  	drawer: false 
	  };
	}
	handleDrawerOpen() {
		this.setState({ drawer: true });
	};
	handleDrawerClose() {
	    this.setState({ drawer: false });
	};	
	render() {
		const { drawer } = this.state;
		return (
			<div>
				<Header drawerWidth="240" 
						drawer={drawer} 
						handleDrawerOpen={this.handleDrawerOpen.bind(this)} 
				/>
				<Sidebar data={topics} />
				<Main>
					<SearchBar />
				</Main>
			</div>
		);
	}
}

export default Home;