import React, {useEffect, useState} from "react";
import CreateItemContainerDialog from "./CreateItemContainerDialog";
import ItemContainerList from "./ItemContainerList";


import containerService from "../services/ContainerService";
import {Container, Button} from "@mui/material";


function App() {
  const [containers, setContainers] = useState([]);

  useEffect(() => refreshContainerList())

  const refreshContainerList = () => {
    containerService.getContainers()
    .then((containers) => {
      setContainers(containers);
    });
  }

  const createContainer = (container) => {
    containerService.createContainer(container)
    .then(response => {
      if (response.ok) {
        refreshContainerList();
      } else {
        console.log(response)
      }
    });
  }

  const deleteContainer = (container) => {
    containerService.deleteContainer(container).then(response => {
      if (response.ok) {
        refreshContainerList();
      } else {
        console.log(response)
      }
    })
  }

  const createItem = (item) => {
    containerService.createItem(item)
    .then(response => {
      if (response.ok) {
        refreshContainerList();
      } else {
        console.log(response)
      }
    });
  }

  const deleteItem = (item) => {
    containerService.deleteItem(item).then(response => {
      if (response.ok) {
        refreshContainerList();
      } else {
        console.log(response)
      }
    })
  }

  const resetItemContainers = () => {
    fetch("/reset")
    .then(response => {
      if (response.ok) {
        refreshContainerList();
      } else {
        console.log(response);
      }
    });
  }

  return (
      <Container>
        <Button variant={"contained"} onClick={resetItemContainers}>Reset</Button>
        <CreateItemContainerDialog createContainer={createContainer}/>
        <ItemContainerList
            containers={containers}
            // callbacks={{deleteContainer: deleteContainer}}
            deleteContainer={deleteContainer}
            createItem={createItem}
            deleteItem={deleteItem}/>
      </Container>
  )
}

export default App;