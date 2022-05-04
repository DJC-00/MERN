import React, { Component } from 'react';


class Main extends Component{
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
            <div className='pl-2 pt-2 border border-1'>
                <div className='d-flex justify-content-around'>
                    {this.props.children[0]}
                    {this.props.children[1]}
                    {this.props.children[2]}
                    {/* React.Children.filter(thils.props.children, child => ) */}
                </div>
                <div className='pt-2 pb-2'>
                    {this.props.children[3]}
                </div>
            </div>
            
        );
    }
}
export default Main;