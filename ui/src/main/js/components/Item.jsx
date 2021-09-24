import React from "react";

function Item(props) {
  return (
      <div className="item">
        <p>Name: {props.item.name}</p>
        <p>Description: {props.item.description}</p>
        <button onClick={() => props.deleteItem(props.item)}>Delete Item</button>
      </div>
  )
}

export default Item;