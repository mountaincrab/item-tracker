import React from "react";
import Item from "./Item"
import CreateItemDialog from "./CreateItemDialog";

function Container(props) {
  return (
      <div className="container">
        <p>Name: {props.container.name}</p>
        <p>Description: {props.container.description}</p>
        <p>Items: </p>
        {props.container.items.map((item) =>
            <Item
                key={item.id}
                item={item}
                deleteItem={props.deleteItem}/>
        )}
        <CreateItemDialog
            createItem={props.createItem}
            containerId={props.container.id}
            createItem2={(item) => props.createItem(Object.assign(item, {container: {id: props.container.id}}))}/>
        <button
            onClick={() => props.deleteContainer(props.container)}>
          Delete Container
        </button>
      </div>
  )
}

export default Container;