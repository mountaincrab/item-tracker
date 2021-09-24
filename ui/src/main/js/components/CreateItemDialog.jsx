import React, {useState} from "react";

function CreateItemDialog(props) {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    props.createItem({
      container: {
        id: props.containerId
      },
      // container_id: props.containerId,
      name: name,
      description: description
    });
    setName('');
    setDescription('');
    e.preventDefault();
  }

  return (
      <div>
        <p>Create item:</p>
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
          <input type="submit" value="Create Item"/>
        </form>
      </div>
  )
}

export default CreateItemDialog;