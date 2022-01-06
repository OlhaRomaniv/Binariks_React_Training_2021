import React, { Component } from 'react';
import Child from './ClassChild';
export default class Parent extends Component {
    constructor(){
        super();
        this.state = {
            number: 0
        }
    }
    componentDidMount() {
        let interval = setInterval(() => {
          this.setState(() => {
            return {
              number: Math.floor((Math.random() * 100) + 1)
            };
          });
        }, 5000);
      }
     
    render() {
        return (
            <div>
                <Child randomNumber = {this.state.number}/>
          </div>
        )
    }
}
