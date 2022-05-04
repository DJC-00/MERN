import React, { Component } from 'react';


class Add extends Component{
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
            
            <div className='border border-1 text-center'>
                <h3 className='text-center'>ADDaddADDaddADDadd</h3>
            </div>

        );
    }
}
export default Add;