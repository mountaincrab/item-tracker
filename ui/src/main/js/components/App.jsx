import React, {useEffect, useState} from "react";
import CreateContainerDialog from "./CreateContainerDialog";
import ContainerList from "./ContainerList";

import containerService from "../services/ContainerService";


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

  const resetContainers = () => {
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
      <div>
        <Button>test</Button>
        <button onClick={resetContainers}>Reset</button>
        <CreateContainerDialog createContainer={createContainer}/>
        <ContainerList
            containers={containers}
            // callbacks={{deleteContainer: deleteContainer}}
            deleteContainer={deleteContainer}
            createItem={createItem}
            deleteItem={deleteItem}/>
      </div>
  )
}

export default App;