import React from "react";
import ItemContainer from "./ItemContainer";

function ItemContainerList(props) {
  return (
      <div className="container-list">
        <p>We have {props.containers.length} containers</p>
        {props.containers.map((container, index) =>
            <ItemContainer
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

export default ItemContainerList;