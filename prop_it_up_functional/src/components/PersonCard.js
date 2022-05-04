import React, { useState } from 'react';


const PersonCard = props => {
    const [state, setState, age] = useState({
        age: props.age,
        firstName: props.firstName,
        lastName: props.lastName
    });
    // const handleClick = () => {
    //     setState({
    //         clickCount: state.clickCount + 1
    //     });
    // }
    const birthday = () => {
        setState({
        // this.age = Number(this.age + Number(1));
        // let newAge = Number(state.age) + 1;
            age: state.age + 1
        // this.setState({age : Number(this.state.age) + 1})
        // console.log("birthday!", this.age)
        });
    }
        // const {} = this.props;
        return(
            
            <>
            <div>
                <h1>{ props.lastName }, { props.firstName }</h1>
                <p>Age: { state.age }</p>
                <p>Hair Color: { props.hairColor }</p>
                <button onClick={birthday}>Happy Birthday </button>
            </div>
            <hr />
            </>
        );
    }

export default PersonCard;