import React,{Component} from 'react';
class Welcome extends Component{
    render(){
        // return <h1>This is the class,component.</h1>;
        console.log(this.props.name)
        return <h1>My name is {this.props.name}</h1>
    }
}
export default Welcome