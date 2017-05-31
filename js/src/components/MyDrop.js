import React, { Component } from 'react';

export default class MyDrop extends Component {
	updateCurrentSelectedItem(e) {
		this.props.dispatch('UPDATE_VAL', {
			currentSelectedItem: parseInt(e.target.value, 10),
		});
		
	}
	render() {
		const {array} = this.props;

		return <select onChange={(e) => this.updateCurrentSelectedItem(e)}>
			{array.map(current => <option key={current} value={current+1}>{current+1}</option>)}
		</select>
	}
}