import React from "react";
import Container from "./Container";

export default class ContainerList extends React.Component {
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
                  deleteContainer={this.props.deleteContainer}
                  deleteItem={this.props.deleteItem}
              />
          )}
        </div>
    )
  }
}