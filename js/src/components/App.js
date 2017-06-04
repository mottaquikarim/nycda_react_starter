import React, { Component } from 'react';
import AlarmCreate from './AlarmCreate';
import AlarmList from './AlarmList'

export default class App extends Component {
    render() {
        return (<div>
            <AlarmCreate {...this.props} />  
            <AlarmList {...this.props} />  
        </div>);
    }
}
