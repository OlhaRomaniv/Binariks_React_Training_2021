
import './App.css';
import Selectors from "./Selectors"
import React, { Component } from 'react'

export default class Main extends Component {
  constructor(props){
    super(props);
    this.setDescription.bind(this)
    this.state = {
      description: 'Initial Description'
    }
  }
  setDescription = (newDes) => {
    this.setState({description: newDes})
  }
  render() {
    return (
      <div>
        <h1>{this.state.description}</h1>
        <Selectors setDescription = {this.setDescription}/>
      </div>
    )
  }
}
