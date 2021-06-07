import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
             counter:0
        }
    }
    increment(){
        this.setState(
        (prevState)=>{
            return {
            counter:prevState.counter+1
            };
        }
        )
    }
    fiveincrement(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render() {
        return (
            <div className="ToDoList">
                <h2>Number of TodoList Created On This App</h2> -<h1>{this.state.counter}</h1>
                <button onClick={()=>{this.fiveincrement()}}>Increment</button>
            </div>
        )
    }
}
export default Counter
