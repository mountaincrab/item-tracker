import React from "react";

export default class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="item">
          <p>Name: {this.props.item.name}</p>
          <p>Description: {this.props.item.description}</p>
          <button onClick={() => this.props.deleteItem(this.props.item)}>Delete</button>
        </div>
    )
  }
}