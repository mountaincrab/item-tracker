import "../css/main.css"

const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {containers: []};
    this.refreshContainerList = this.refreshContainerList.bind(this);
  }

  componentDidMount() {
    this.refreshContainerList();
  }

  refreshContainerList() {
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
          <CreateContainer refreshContainers={this.refreshContainerList}/>
          <ContainerList containers={this.state.containers}/>
        </div>
    )
  }

}

class CreateContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    fetch('/api/containers', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: "a new container",
        description: new Date(),
        items: []
      })
    }).then(response => {
      console.log(response);
      this.props.refreshContainers();
    })

    console.log('Created container!');
  }

  render() {
    return (
        <div>
          <button onClick={this.handleClick}>Create container</button>
        </div>
    )
  }
}

class ContainerList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="container-list">
          <p>We have {this.props.containers.length} containers</p>
          {this.props.containers.map((container, index) =>
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
        <div className="container">
          <p>Name: {this.props.container.name}</p>
          <p>Description: {this.props.container.description}</p>
          <p>Items: </p>
          {this.state.items.map((item) =>
              <Item key={item._links.self.href} item={item}/>
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
        <div className="item">
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