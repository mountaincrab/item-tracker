import React, {useState} from "react";
import {Button, Container, TextField} from "@mui/material";

function CreateItemContainerDialog(props) {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    props.createContainer({
      name: name,
      description: description
    });
    setName('');
    setDescription('');
    e.preventDefault();
  }

  return (
      <Container>
        <h2>Create container</h2>
        <form onSubmit={handleSubmit}>
          <TextField
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}/>
          <br/>
          <TextField
              label="Description"
              variant="outlined"
              value={description}
              onChange={(e) => setDescription(e.target.value)}/>

          <Button type="submit" variant={"contained"}>Create ItemContainer</Button>
        </form>
      </Container>
  )
}

export default CreateItemContainerDialog;