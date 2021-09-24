import React, {useState} from "react";

function CreateContainerDialog(props) {

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
      <div>
        <h2>Create container</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}/>
          </label>
          <br />
          <label>
            Description:
            <input
                type="text"
                name="description"
                value={description}
                onChange={e => setDescription(e.target.value)}/>
          </label>
          <input type="submit" value="Create Container"/>
        </form>
      </div>
  )
}

export default CreateContainerDialog;