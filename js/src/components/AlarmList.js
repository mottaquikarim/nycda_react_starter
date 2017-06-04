import React, { Component } from 'react';

export default class AlarmList extends Component {
	render() {
		console.log(this.props.active_alarms)
		return <div className="ui segments">
			{this.renderAlarms()}
		</div>
	}
	renderAlarms() {
		const {active_alarms} = this.props;
		return active_alarms.map((currAlarm, index) => {
			const {name, time} = currAlarm;

			return <div key={index} className="ui segment">
				<h1>{index+1}. {name}</h1>
				<p className="ui desc">{new Date(time).toString()}</p>
			</div>	
		});
	}
}