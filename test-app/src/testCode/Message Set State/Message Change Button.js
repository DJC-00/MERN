import React, { Component } from 'react';
    
    
class Message extends Component{
    // Declare constructor to override our default constructor so that we can initially set the state object
    constructor(props){
        // gives us the functionality that comes with the default constructor
        super(props);
        this.state = {
            state: 2,
            message: "Welcome",
            logText: "login"
        }

    }

    logInOut = (e) => {
        if (this.state.state == 1){
            this.setState({message: "Goodbye Friend!"});
            this.setState({logText: "login"});
            this.setState({state: 2})
        } else if (this.state.state == 2){
            this.setState({message: "Hello Buddy!"});
            this.setState({logText: "logout"});
            this.setState({state: 1})
        }
        // this.setState({message: "Goodbye Friend!"});
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.logInOut}>{this.state.logText}</button>
            </div>
        );
    }
}
    
export default Message;