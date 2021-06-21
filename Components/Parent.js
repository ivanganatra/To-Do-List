import React, { Component } from 'react'
import ChildComponent from './Children.js'
class Parent extends Component {
        constructor(props) {
            super(props)

            this.state = {
                 name:"Ivan"
            }
            this.greet=this.greet.bind(this)
        }
    greet(child){
        alert(`Hello ${this.state.name} from ${child}`);
    }
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greet}/>
            </div>
        )
    }
}
export default Parent
