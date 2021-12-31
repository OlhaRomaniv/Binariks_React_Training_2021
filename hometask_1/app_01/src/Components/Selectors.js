import React, { Component } from 'react'
const options = [
    {
      label: "Apple",
      value: "apple",
    },
    {
      label: "Mango",
      value: "mango",
    },
    {
      label: "Banana",
      value: "banana",
    },
    {
      label: "Pineapple",
      value: "pineapple",
    },
  ];
export default class Selectors extends Component {
    constructor(props){
        super(props);
        //this.handleChange.bind(this);
    }
    // handleChange = () => {
    //     this.props.setDescription();
    // }
    render() {
        return (
            <div>
                 <select /*onChange = {this.handleChange}*/>
                 {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
            </div>
        )
    }
}
