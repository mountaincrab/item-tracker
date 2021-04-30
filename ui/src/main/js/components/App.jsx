import React from "react";
import CreateContainerDialog from "./CreateContainerDialog";
import ContainerList from "./ContainerList";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {containers: []};
    this.refreshContainerList = this.refreshContainerList.bind(this);
    this.createContainer = this.createContainer.bind(this);
    this.deleteContainer = this.deleteContainer.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
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

  createContainer(container) {
    fetch('/api/containers', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(container)
    }).then(response => {
      if (response.ok) {
        this.refreshContainerList();
      } else {
        console.log(response)
      }
    })
  }

  deleteContainer(container) {
    fetch(container._links.self.href, {
      method: 'delete'
    }).then(response => {
      if (response.ok) {
        this.refreshContainerList();
      } else {
        console.log(response)
      }
    })
  }

  deleteItem(item) {
    fetch(item._links.self.href, {
      method: 'delete'
    }).then(response => {
      if (response.ok) {
        this.refreshContainerList();
      } else {
        console.log(response)
      }
    })
  }

  resetContainers() {
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
          <CreateContainerDialog createContainer={this.createContainer}/>
          <ContainerList
              containers={this.state.containers}
              deleteContainer={this.deleteContainer}
              deleteItem={this.deleteItem}/>
        </div>
    )
  }
}