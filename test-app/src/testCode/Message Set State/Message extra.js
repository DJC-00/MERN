import React, { Component } from 'react';
    
    
class Message extends Component{
    // Declare constructor to override our default constructor so that we can initially set the state object
    constructor(props){
        // gives us the functionality that comes with the default constructor
        super(props);
        this.state = {
            state: 1,
            message: "Hello Buddy!"
        }

    }

    logout = (e) => {
        if (this.state.state == 1){
            this.setState({message: "Goodbye Friend!"});
            this.setState({state: 2})
        } else if (this.state.state == 2){
            this.setState({message: "Hello Buddy!"});
            this.setState({state: 1})
        }
        // this.setState({message: "Goodbye Friend!"});
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.logout}>Leave</button>
            </div>
        );
    }
}
    
export default Message;