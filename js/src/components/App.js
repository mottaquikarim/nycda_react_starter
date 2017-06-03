import React, { Component } from 'react';
import Counter from './Counter';

export default class App extends Component {
    render() {
        return (<div>
            <Counter {...this.props} />    
        </div>);
    }
}
