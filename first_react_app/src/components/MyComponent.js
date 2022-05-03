import React, { Component } from 'react';

class MyComponent extends Component{
    render(){
        return(
            <div>
                We are in MyComponent
                <br/>
                <p>First Name: {this.props.someText}</p>
                <p>Last Name: {this.props.otherText}</p>
                <br/>
                
            </div>
        );
    }
}

export default MyComponent;