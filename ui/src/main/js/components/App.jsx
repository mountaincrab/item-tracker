import React, {useEffect, useState} from "react";
import CreateContainerDialog from "./CreateContainerDialog";
import ContainerList from "./ContainerList";
import containerService from "../services/ContainerService";

let p = new Promise((resolve, reject) => {
  setTimeout(() => resolve(10), 1000);
})
.then(
    resolved => {
      console.log("Promise 1 resolved to " + resolved);
      return resolved + 10;
    },
    rejected => {
      console.log("Promise 1 rejected to " + rejected);
      return rejected;
});
// .then(answer => new Promise(resolve, reject) => {
//   setTimeout(() => resolve(answer))
// });


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