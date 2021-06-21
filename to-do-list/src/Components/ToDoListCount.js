import React, { Component } from 'react'
import './ToDoListCount.css'
class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
             counter:0,
             render:false
        }
        this.fiveincrement=this.fiveincrement.bind(this)
    }
    componentDidMount() {
        setTimeout(function() { //Start the timer

            this.setState({render: true}) //After 1 second, set render to true
        }.bind(this), 5000)
    }
    oneincrement(){
        this.componentDidMount();
        console.log(this.state.render);
        if(this.state.render){
            this.setState(
                (prevState)=>{
                    return {
                    render:false,
                    counter:prevState.counter+1
                };
            }
            )
        }
    }
    fiveincrement(){
        console.log(this.state.render);
        if(this.state.render===false){
            this.componentDidMount();
            console.log(this.state.render);
            if(this.state.render){
                this.setState(
                    (prevState)=>{
                        return {
                        render:false,
                        counter:prevState.counter+5
                    };
                }
                )
            }
        }
    }
    increment(loops){
        let loop=loops
        console.log("loop"+loops)
        while(loop-5>=0)
        {
            this.fiveincrement();
            loop-=5;
        }
        while(loop>0)
        {
            this.increment();
            loop-=1;
        }
    }

    render() {
        return (
            <div className="ToDoList">
                <h2>Number of TodoList Created On This App</h2>
                <h1>{this.state.counter}</h1>
                <button onClick={()=>{this.increment(100)}}>Increment</button>
            </div>
        )
    }
}
export default Counter
