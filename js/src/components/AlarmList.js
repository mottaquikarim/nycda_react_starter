import React, { Component } from 'react';

export default class AlarmList extends Component {
    click(e, time) {
        e.preventDefault();
        this.props.dispatch('UPDATE_ROUTE', {
            time,
        })
    }
	render() {
		console.log(this.props.active_alarms)
		return <div className="ui segments">
			{this.renderAlarms()}
		</div>
	}
	renderAlarms() {
        const {keyName} = this.props;
		return this.props[keyName].map((currAlarm, index) => {
			const {name, time} = currAlarm;

			return <div key={index} className={"ui segment " + (this.props.classNames || []).join(' ')}>
				<h1>
                    <a href="#" onClick={(e) => this.click(e, time)}>{index+1}. {name}</a>
                </h1>
				<p className="ui desc">{new Date(time).toString()}</p>
			</div>	
		});
	}
}
