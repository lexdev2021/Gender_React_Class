import React from 'react';


export class TextOutput extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <p className="output">{this.props.output}</p>
  }
}



/* export function TextOutput(props) {
  return <input type="text" className="output" value={props.gender}/>
} */