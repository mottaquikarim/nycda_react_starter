import React, { Component } from 'react';

export default class MyDrop extends Component {
	updateCurrentSelectedItem(e) {
		this.props.dispatch('UPDATE_DROP', {
			[this.props.keyName]: e.target.value,
		});
		
	}
	render() {
		const {array} = this.props;

		return <select onChange={(e) => this.updateCurrentSelectedItem(e)}>
			{array.map(current => <option key={current} value={current}>{current}</option>)}
		</select>
	}
}