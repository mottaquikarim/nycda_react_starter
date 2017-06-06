import React, { Component } from 'react';
import Router, { Route, Link } from '../router/Router';

import AlarmCreate from './AlarmCreate';
import AlarmList from './AlarmList'

export default class App extends Component {
    interval = null
    alarmLogic() {
        const {active_alarms} = this.props;

        if (!active_alarms.length) {
            clearInterval(this.interval);
            this.interval = null;
            return;
        }

        // if here, then there are alarms
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();

        active_alarms.filter((currentAlarm) => {
            const alarmDate = new Date(currentAlarm.time);
            return alarmDate.getHours() <= hours && alarmDate.getMinutes() <= minutes; 
        }).forEach((filteredAlarm) => {
            this.props.dispatch('INACTIVATE_ALARM', {
                time: filteredAlarm.time,
            });
            alert(filteredAlarm.name.toUpperCase());
        });
    }
    componentDidMount() {
        this.interval = setInterval(() => this.alarmLogic(), 1000);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.active_alarms.length) {
            clearInterval(this.interval);
            this.interval = setInterval(() => this.alarmLogic(), 1000);
        }
        else if (nextProps.active_alarms.length === 0) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }
    render() {
        const {currentRoute} = this.props;
        console.log(currentRoute)
        return (<div>
            <Link route="/create" {...this.props}>New Alarm</Link>
            <Link route="/list" {...this.props}>Show Alarms</Link>

            <br />
            <br />

            <Router currentRoute={currentRoute} dispatch={this.props.dispatch}>
                <Route url="/create">
                    <AlarmCreate {...this.props} />  
                </Route>
                <Route url="/list">
                    <AlarmList {...this.props} keyName="active_alarms"/>  
                    <AlarmList {...this.props} keyName="inactive_alarms" classNames={['disabled']}/>  
                </Route>
                <Route url="/list/:when">
                    <h1>Here</h1>
                </Route>
            </Router>
        </div>);
    }
}
