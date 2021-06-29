import React from 'react'
import './Todo-Card.css'
import ToDoList from './ToDoList.js'
let list=[];
var eachitem;
for(eachitem=1;eachitem<=3;eachitem++)
{
    list.push('Task '+ eachitem);
}
//on hovering I want that edit icon should appear
class Todo_Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
             todos:[],
             isClicked:"false",
             open:false
        }
        this.changetodos=this.changetodos.bind(this);
        this.listitems=this.listitems.bind(this);
        this.addNewItem=this.addNewItem.bind(this);
        // this.buttonDisabled=this.buttonDisabled.bind(this);
        // this.changeLoopCounter=this.changeLoopCounter.bind(this);
    }
    changetodos(event,id){
        const newtodos=this.state.todos;
        newtodos[id]=event.target.value;
        this.setState({todos:newtodos});
    }
    //Move the mouse hover on icon, editing rights of input shall open
    listitems(id)
    {
        const placeholder='Task '+(id+1);
        return(
            <div class='each-task'>
              <input className={id} type="text"  placeholder={placeholder} onChange={(event)=>{this.changetodos(event,id)}}/>
              <button class="icon">
                    <img class="drawIcon" src="./img/drawIcon.png" onMouseOver={(event)=>{this.changetodos(event,id)}}></img>
              </button>
            </div>
        );
    }
    addNewItem()
    {
        const id=this.state.todos.length;
        let newtodo=this.state.todos;
        newtodo.push("");
        this.setState({todos:newtodo});
        console.log(this.state.todos);
       // return newItem;
    }
    changeOpenState(){
        this.setState({open:!this.state.open});
        console.log("Change kar diya open");
        console.log("kar diya change",this.state.open);
    }
    leftnavbar=(index)=>
    {
        console.log("check karo",this.state.open);
    }
    render(){
        return (
            <div class="Todo-Card">
                <ToDoList />
                <div className="Main-area">
                    <button  type="submit" class="add-btn" onClick={this.addNewItem}>Add Card</button>
                <div className="Cards-wrapper">
                {
                    this.state.todos.map((value,index)=>{
                        return  (
                        <div class='each-card'>
                        <div class="header">
                            <input class="heading-of-card" type="text" placeholder={'Task '+index} onChange={(event)=>{this.changetodos(event,index)}} onClick={(event)=>{this.changetodos(event,index)}}/>
                                    <form class="form" for="cars">
                                    <select id="cars" name="cars">
                                        <option value="volvo">Level-1</option>
                                        <option value="saab">Level-2</option>
                                        <option value="fiat">Level-3</option>
                                        <option value="audi">Level-4</option>
                                    </select>
                                    </form>
                            <button class="btn-open-todo" onClick={()=>{this. changeOpenState()}}  onChange={(event)=>{this.changetodos(event,index)}}>Expand</button>
                        </div>
                        {this.leftnavbar(index)}
                        <div class={this.state.open?"content":"nocontent"}>
                            <textarea class="paragraph" onChange={(event)=>{this.changetodos(event,index)}}></textarea>
                        </div>
                        </div>

                      )
                    })
                }
                </div>
                </div>
            </div>
        )
    }
}
export default Todo_Card;