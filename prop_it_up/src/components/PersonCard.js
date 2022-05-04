import React, { Component } from 'react';


class PersonCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            age: props.age
        }
    }

    birthday = (e) => {
        // this.age = Number(this.age + Number(1));
        let newAge = Number(this.state.age) + 1;
        this.setState({age : newAge})
        // this.setState({age : Number(this.state.age) + 1})
        // console.log("birthday!", this.age)
    }
    render(){
        const {firstName, lastName, age, hairColor} = this.props;
        return(
            <>
            <div>
                <h2>{firstName} {lastName}</h2>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.birthday}>Happy Birthday {firstName}</button>
            </div>
            <hr />
            </>
        );
    }
}
export default PersonCard;