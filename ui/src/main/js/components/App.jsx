import React, {useEffect, useState} from "react";
import CreateItemContainerDialog from "./CreateItemContainerDialog";
import ItemContainerList from "./ItemContainerList";

import containerService from "../services/ContainerService";
import {Button, Container} from "@mui/material";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
import {useAuth0} from "@auth0/auth0-react";

function App() {
  const [containers, setContainers] = useState([]);

  useEffect(() => refreshContainerList(), [])

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

  const {isAuthenticated, getAccessTokenSilently} = useAuth0();
  if (isAuthenticated) {
    getAccessTokenSilently().then(token => document.getElementById("access-token").innerText = JSON.stringify(token));
  }

  return (
      <Container>
        <LoginButton/>
        <LogoutButton/>
        <Profile/>
        <p>Access token: </p>
        <pre id="access-token"></pre>
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