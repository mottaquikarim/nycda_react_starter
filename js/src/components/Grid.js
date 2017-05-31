import React, { Component } from 'react';

export default class Grid extends Component {
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