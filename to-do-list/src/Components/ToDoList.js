import React from 'react'
import './ToDoList.css'
const list=["Hotel","Restaurant","Task1","Task2","Task3"];
class ToDoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
             todos:["1","2","3","4"],
        }
        this.changetodos=this.changetodos.bind(this);
        this.listitems=this.listitems.bind(this);
        // this.changeLoopCounter=this.changeLoopCounter.bind(this);
    }
    changetodos(event,id){
        console.log(this.state.todos[1],this.state.todos[2]);
        const newtodos=this.state.todos;
        newtodos[id]=event.target.value;
        this.setState({todos:newtodos});
    }
    // changeLoopCounter(){
    //     this.setState((prevState)=>
    //     {
    //         return {loop:prevState.loop+1};
    //     });
    // }
    listitems(placeholder,id)
    {
        return(
            <input className={id} type="text" value={this.state.todos[id]} placeholder={placeholder} onChange={(event)=>{this.changetodos(event,id)}}/>
        );
    }
    render(){
        return (
        <div className="to-do-list">
            <div class="left-list">
                <div class="list">
                {
                    list.map((value,index)=>{
                        return this.listitems(value,index);
                    })
                }
                    <li>Flight</li>
                    <li>Car Rental</li>
                    <li>Tours</li>
                </div>
            </div>
            <div class="form">
                <label>Username</label>
            </div>
        </div>
        )
    }
}
//script
export default ToDoList
