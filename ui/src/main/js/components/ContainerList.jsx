import React from "react";
import Container from "./Container";

function ContainerList(props) {
  return (
      <div className="container-list">
        <p>We have {props.containers.length} containers</p>
        {props.containers.map((container, index) =>
            <Container
                key={container.id}
                container={container}
                deleteContainer={props.deleteContainer}
                createItem={props.createItem}
                deleteItem={props.deleteItem}
            />
        )}
      </div>
  )
}

export default ContainerList;