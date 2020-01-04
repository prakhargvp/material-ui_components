import React, { Fragment, Component } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse'; 
import Button from '@material-ui/core/Button'; 


const useStyles = makeStyles(theme => ({
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


function MountList({topics, open=[], toggleMenu, level=1}) {
	const classes = useStyles();
	const { nested,listItem, listItemText } = classes;
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
							className={listItemText}
							onClick={level==1 ? (() => toggleMenu(topic.id)) : (() => {})}

					>
						{topic.name}
					</Button>
					{
						_.size(topic.children) > 0 && 
						<Collapse 
							in={level!=1 || open.includes(topic.id)} 
							timeout="auto" 
							unmountOnExit 
							className={nested}
						>
							<List dense disablePadding component="ul" className={'level-'+level}>
								<MountList topics={topic.children} level={level+1} />
							</List>
						</Collapse>
					}
				</ListItem>
			</Fragment>
		))
	);
}

export default class SideBarNavLinks extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	open: []
	  };
	}

	toggleMenu(id) {
		this.setState((prevState, props) => {
			if(prevState.open.includes(id))
				return {  
					open: prevState.open.filter(e => e != id)
				};
			else 
				return { open: [...prevState.open, id] }; 
		});
	}

	render() {
		return (
		<List dense={true} component="ul" className={"level-0"}> 
			<MountList topics={this.props.data} open={this.state.open} toggleMenu={this.toggleMenu.bind(this)} />
	    </List>
		);
	}
}
