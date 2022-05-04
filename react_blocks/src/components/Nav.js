import React, { Component } from 'react';


class Nav extends Component{
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
        // const {firstName, lastName, age, hairColor} = this.props;
        return(
            
            <div className='text-primary border border-1 p-2'>
                <h2>nav option</h2>
                <h2>nav option 2</h2>
            </div>

        );
    }
}
export default Nav;