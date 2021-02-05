const React = require('react');
const ReactDOM = require('react-dom');

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scale: 'c',
            temperature: ''
        }
        this.handleTemperatureChange = this.handleTemperatureChange.bind(this);
    }

    handleTemperatureChange(scale, temperature) {
        this.setState({scale: scale, temperature: temperature});
    }

    render() {
        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={this.state.temperature}
                    handleTemperatureChange={this.handleTemperatureChange}
                />
                <TemperatureInput
                    scale="f"
                    temperature={this.state.temperature}
                    handleTemperatureChange={this.handleTemperatureChange}
                />
            </div>
        )
    }
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.handleTemperatureChange(this.props.scale, e.target.value);
    }

    render() {
        return (
            <div>
                <p>scale: {this.props.scale}</p>
                <input value={this.props.temperature} onChange={this.handleChange}/>
            </div>
        )
    }
}

ReactDOM.render(
    <Calculator/>,
    document.getElementById("container")
);