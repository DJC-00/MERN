import React, { Component } from 'react';


class PersonCard extends Component{
    render(){
        const {firstName, lastName, age, hairColor} = this.props;
        return(
            <>
            <div>
                <h2>{firstName} {lastName}</h2>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
            </div>
            <hr />
            </>
        );
    }
}
export default PersonCard;