import React from 'react';

export class TextInput extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onNameChange(e.target.value);
  }

  render() {
    return (
      <input 
        type="text"
        className="input" 
        placeholder="Enter a name"
        onChange={this.handleChange}
        // value={this.props.value}
      />
    )
  }
  
}



/* export function TextInput(props) {
  // const value = props.value;
  return (
    <input 
      type="text"
      className="input" 
      placeholder="Enter a name"
      onChange={props.onChange}
      defaultValue={props.value}
    />
  )
} */