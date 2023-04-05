import { useState } from 'react'
import logo from './logo.svg'
import React from 'react'
import './App.css'
import {TextInput} from './TextInput.jsx'
import {Button} from './Button.jsx'
import {TextOutput} from './TextOutput'


/* function Genderize() {

  function handleSubmit(e) {
    e.preventDefault();
    const firstName = e.target[0].value;
    if(firstName.length < 3) {
      alert('Enter correct name!');
      e.target.reset();
      return;
    }
    const serverUrl = 'https://api.genderize.io';
    const url = `${serverUrl}?name=${firstName}`;

    fetch(url)
    .then(res => res.json())
    .then(res => e.target.nextElementSibling.textContent = res.name + ' is ' + res.gender)
    e.target.reset();
  }

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <TextInput />
        <Button />
      </form>
      <TextOutput />
    </div>
  )
} */



class Genderize extends React.Component {

  constructor(props) {
    super(props);
    this.state = {input: '', output: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const firstName = this.state.input;
    if(firstName.length < 3) {
      alert('Enter correct name!');
      return;
    }
    const serverUrl = 'https://api.genderize.io';
    const url = `${serverUrl}?name=${firstName}`;

    fetch(url)
    .then(res => res.json())
    // .then(res => console.log(res))
    .then(res => this.setState({output: res.name + ' is ' + res.gender}))

  }

  handleChange(name) {
    this.setState({input: name});
  }

  render() {
    return (
      <div className="container">
        <form className="form" onSubmit={this.handleSubmit}>
          <TextInput onNameChange={this.handleChange} value={this.state.input} />
          <Button />
        </form>
        <TextOutput output={this.state.output}/>
      </div>
    )
  }
}

export default Genderize;

 

