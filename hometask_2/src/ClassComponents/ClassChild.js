import React, { Component, createRef } from 'react';
import '../Styles/Child.scss';

export default class Child extends Component {
    constructor(props) {
        super(props);
        this.ref = createRef(null);
      }
    componentDidUpdate(prevProps) {
        if (prevProps.randomNumber< this.props.randomNumber) {
            this.ref.current.classList = 'One';
        }
        else if (prevProps.randomNumber> this.props.randomNumber) {
            this.ref.current.classList = 'Two';
        }
        
    }

    render() {
        return (
            <div className='Wrapper'>
                <div ref={this.ref}>
                <p>{this.props.randomNumber}</p>
                </div>
            </div>
        )
    }
}
