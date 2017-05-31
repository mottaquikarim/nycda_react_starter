import React, { Component } from 'react';

export default class Label extends Component {
	render() {
		const {content} = this.props;
		return <span>{content}</span>
	}
}
	