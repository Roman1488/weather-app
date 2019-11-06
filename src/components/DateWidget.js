import React, { Component } from 'react';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

class DateWidget extends Component {
    state = {
        time: new Date()
    };
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);

    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            time: new Date()
        });
    }
    render() {
        return (
            <div className="weather__date-wrapper">
                <h4 className="weather__date">{ days[this.state.time.getDay()] } { String(this.state.time.getDate()).padStart(2, '0') } { monthNames[this.state.time.getMonth()] }</h4>
                <h5 className="weather__time">{ this.state.time.toLocaleTimeString() }</h5>
            </div>
        );
    }
}

export default DateWidget;