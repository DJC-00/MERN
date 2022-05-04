import React, { Component } from 'react';


class Content extends Component{
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
            <div className='border border-1 mt-2 mb-2 w-25' style={{height:'250px'}}>content</div>
        );
    }
}
export default Content;