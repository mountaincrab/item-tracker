const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {containers: []};
    }

    componentDidMount() {
        fetch("/api/containers")
            .then((response) =>
                response.json())
            .then((responseJson) => {
                this.setState({containers: responseJson._embedded.containers});
            })
    }

    render() {
        return (
            <div>
                <p>We have {this.state.containers.length} containers</p>
                {this.state.containers.map((container, index) =>
                    <Container
                        key={container.id}
                        container={container}
                    />
                )}
            </div>


        )
    }
}

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: []};
    }

    componentDidMount() {
        fetch(this.props.container._links.items.href)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({items: responseJson._embedded.items})
            })
    }

    render() {
        return (
            <div>
                <p>Name: {this.props.container.name}</p>
                <p>Description: {this.props.container.description}</p>
                <p>Items: </p>
                {this.state.items.map((item) =>
                    <Item key={item._links.self.href} item={item} />
                )}
            </div>
        )
    }
}

class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>Item</p>
                <p>Name: {this.props.item.name}</p>
                <p>Description: {this.props.item.description}</p>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("app")
);