 import React from 'react'
import './Todo-Card.css'
import ToDoList from '../Button/ToDoList.js'
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
             open:false,
             open_state:[],
             placeholder:[],
             changePlaceholder:true,
             level:[],

        }
        this.changetodos=this.changetodos.bind(this);
        this.addNewItem=this.addNewItem.bind(this);
        console.log("Todo_Card Component has been called out");
        // document.getElementById('btn-open-todo').onClick=()=>{this. changeOpenState(index)};
        // this.buttonDisabled=this.buttonDisabled.bind(this);
        // this.changeLoopCounter=this.changeLoopCounter.bind(this);
    }
    changetodos(event,id){
        const newtodos=this.state.todos;
        newtodos[id]=event.target.value;
        const newopen_state=this.state.open_state;
        newopen_state[id]=false;
        const newlevel=this.state.level;
        newlevel[id]=false;
        this.setState({todos:newtodos, open_state:newopen_state,placeholder:newlevel});
    }
    //Move the mouse hover on icon, editing rights of input shall open
    addNewItem()
    {
        const id=this.state.todos.length;
        let newtodo=this.state.todos;
        newtodo.push("");
        this.setState({todos:newtodo});
        console.log(this.state.todos);
       // return newItem;
    }
    changeOpenState(index){
        const newopen_state=this.state.open_state;
        newopen_state[index]=!newopen_state[index];
        this.setState({open_state:newopen_state});
        console.log("Change kar diya open");
        console.log("kar diya change",this.state.open_state[index]);
    }
    changePlaceholderOnSelect(index)
    {
        console.log("Placeholder changed on select");
        const newlevel=this.state.level;
        newlevel[index]=!newlevel[index];
        const eachOption=document.getElementById(index);
        const new_placeholder=this.state.placeholder;
        new_placeholder[index]=eachOption.options[eachOption.selectedIndex].innerHTML;
        console.log("Update placeholder" + new_placeholder);
        this.setState({placeholder:new_placeholder,level:newlevel});
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
                            <input class="heading-of-card" type="text" placeholder={this.state.level[index]?this.state.placeholder[index]+" Task":"Your Task: "+(index+1)} onChange={(event)=>{this.changetodos(event,index)}} onClick={(event)=>{this.changetodos(event,index)}} />
                                    <form class="form" for="cars">
                                    <select id={index} name="cars" autoComplete="on"  onChange={()=>{this.changePlaceholderOnSelect(index)}}>
                                        <option class="Level-1" value="volvo" >Level-1</option>
                                        <option value="saab" >Level-2</option>
                                        <option value="fiat">Level-3</option>
                                        <option value="fiat">Level-4</option>
                                        <option value="audi" disabled selected={true}>Level</option>
                                    </select>
                                    </form>
                            <button class="btn-open-todo" onClick={()=>{this. changeOpenState(index)}}  onChange={(event)=>{this.changetodos(event,index)}}>Expand</button>
                        </div>
                        {this.leftnavbar(index)}
                        <div class={this.state.open_state[index]?"content":"nocontent"}>
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