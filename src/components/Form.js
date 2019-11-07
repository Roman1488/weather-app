import React, { Component } from 'react';

const IP_INFO_TOKEN = 'a7638d2bd61770';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            city: '',
            country: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        if(event.target.name === 'city') {
            this.setState({city: event.target.value});
        } else if(event.target.name === 'country') {
            this.setState({country: event.target.value});
        }

    }
    componentDidMount() {
        fetch(`http://ipinfo.io?token=${IP_INFO_TOKEN}`)
            .then(response => response.json())
            .then(result => {
                    this.setState({
                        city: result.city,
                        country: result.country
                    })
                });
    }
    render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <input onChange={this.handleChange} value={this.state.city} type="text" name="city" placeholder="City..."/>
                <input onChange={this.handleChange} value={this.state.country} type="text" name="country" placeholder="Country..."/>
                <button>Get Weather</button>
            </form>
        );
    }
}

export default Form;