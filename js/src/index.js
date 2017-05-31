import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Grid extends Component {
	render() {
		return <div className="ui two column centered grid">
			<div className="four column centered row">
				{this.props.children.map((child, i) => <div key={i} className="column">
					{child}
				</div>)}
			</div>
		</div>
	}
}

const NUM_OPTIONS = 5;
const array = Array.from(Array(NUM_OPTIONS).keys());
const Store = {
	array,
	currentSelectedItem: 1
};

const actions = {
	'UPDATE_VAL': (oldStore, options) => {
		return Object.assign({}, oldStore, options);
	}
};

class Main extends Component {
	state = Store
	// constructor(props) {
	// 	super(props);
		
	// 	this.state = Store;
	// }
	dispatch(actionName, options) {
		const actionToDo = actions[actionName];
		const newStore = actionToDo(this.state, options);
		this.setState(newStore);
	}
	updateCurrentSelectedItem(e) {
		this.dispatch('UPDATE_VAL', {
			currentSelectedItem: parseInt(e.target.value, 10),
		});
		// const currentSelectedItem = parseInt(e.target.value, 10);
		// this.setState({
		// 	currentSelectedItem,
		// });
	}
	render() {
		const {currentSelectedItem} = this.state;
		return <Grid>
			{this.renderDropdown()}
			<span>{currentSelectedItem}</span>
		</Grid>
	}
	renderDropdown() {
		const {array} = this.state;

		return <select onChange={(e) => this.updateCurrentSelectedItem(e)}>
			{array.map(current => <option key={current} value={current+1}>{current+1}</option>)}
		</select>
	}
}

ReactDOM.render(<Main />, document.querySelector('#app'))







