import React, {useEffect, useState} from "react";
import "regenerator-runtime";

import CreateItemContainerDialog from "./CreateItemContainerDialog";
import ItemContainerList from "./ItemContainerList";

import containerService from "../services/ContainerService";
import {Button, Container} from "@mui/material";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
import {useAuth0} from "@auth0/auth0-react";
import {useApiClient} from "../hooks/useApiClient/useApiClient";

function App() {
  const [containers, setContainers] = useState([]);
  const { getContainers, createContainer, deleteContainer, createItem, deleteItem } = useApiClient();

  useEffect(() => refreshContainerList(), [])

  const refreshContainerList = () => {
    getContainers()
        .then((containers) => {
          setContainers(containers);
        });
  }

  const createContainerHandler = (container) => {
    createContainer(container)
        .then(response => {
          if (response.ok) {
            refreshContainerList();
          } else {
            console.log(response)
          }
        });
  }

  const deleteContainerHandler = (container) => {
    deleteContainer(container).then(response => {
      if (response.ok) {
        refreshContainerList();
      } else {
        console.log(response)
      }
    })
  }

  const createItemHandler = (item) => {
    createItem(item)
        .then(response => {
          if (response.ok) {
            refreshContainerList();
          } else {
            console.log(response)
          }
        });
  }

  const deleteItemHandler = (item) => {
    deleteItem(item).then(response => {
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
        <CreateItemContainerDialog createContainer={createContainerHandler}/>
        <ItemContainerList
            containers={containers}
            // callbacks={{deleteContainer: deleteContainer}}
            deleteContainer={deleteContainerHandler}
            createItem={createItemHandler}
            deleteItem={deleteItemHandler}/>
      </Container>
  )
}

export default App;