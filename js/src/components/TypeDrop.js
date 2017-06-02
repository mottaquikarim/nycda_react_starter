import React, { Component } from 'react';

export default class TypeDrop extends Component {
	updateCurrentSelectedItem(e) {
		this.props.dispatch('UPDATE_TYPE', {
			currentType: e.target.value,
		});
		
	}
	render() {
		const {types} = this.props;

		return <select onChange={(e) => this.updateCurrentSelectedItem(e)}>
			{types.map(current => <option key={current} value={current}>{current}</option>)}
		</select>
	}
}