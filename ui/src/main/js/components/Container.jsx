import React from "react";
import Item from "./Item"

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: []};
  }

  componentDidMount() {
    this.refreshItems();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // TODO ccrabtree Cal refreshItems in click handler - call delete callback, then refreshItems.
    this.refreshItems();
  }

  refreshItems() {
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
              <Item
                  key={item._links.self.href}
                  item={item}
                  deleteItem={this.props.deleteItem}/>
          )}
          <button
              onClick={() => this.props.deleteContainer(this.props.container)}>
            Delete
          </button>
        </div>
    )
  }
}