import React, { Component } from 'react';
import Grid from './Grid';
import MyDrop from './MyDrop';
import Label from './Label';

import {
	Store,
} from '../Store';
import {
	actions, 
} from '../actions';

export default class Main extends Component {
	state = Store

	// constructor(props) {
	// 	super(props)
	// 	this.state = Store;
	// }

	dispatch(actionName, options) {
		const actionToDo = actions[actionName];
		actionToDo(this.state, options).then((newStore) => {
			this.setState(newStore);
		});	
	}
	
	render() {
		const {currentSelectedItem} = this.state;
		const sharedProps = {
			dispatch: (...args) => this.dispatch(...args),
			foobar: 1,
			baz: 2,
		}
		return <Grid>
			<MyDrop array={this.state.array} {...sharedProps} />
			<Label content={currentSelectedItem} {...sharedProps} />
		</Grid>
	}
}