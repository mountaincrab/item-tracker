import React from "react";

export default class CreateContainerDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {name: '', description: ''};
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    this.props.createContainer({
      name: this.state.name,
      description: this.state.description
    });
    this.setState({name: '', description: ''})
    e.preventDefault();
  }

  render() {
    return (
        <div>
          <h2>Create container</h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}/>
            </label>
            <br />
            <label>
              Description:
              <input
                  type="text"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange}/>
            </label>
            <input type="submit" value="Create"/>
          </form>
        </div>
    )
  }
}