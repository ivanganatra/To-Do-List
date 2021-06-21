import React from 'react'
import './Button.css'
let list=[];
var eachitem;
for(eachitem=1;eachitem<=3;eachitem++)
{
    list.push('Task '+ eachitem);
}
//on hovering I want that edit icon should appear
class Button extends React.Component{
    constructor(props){
        super(props);
        this.state = {
             todos:[],
             isClicked:"false",
             enabled:-1
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
        console.log(this.state.enabled);
    }
    changetodos1(event,id){
        const newtodos=this.state.todos;
        newtodos[id]=event.target.value;
        this.setState({todos:newtodos,enabled:id});
        console.log(this.state.enabled);
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
    render(){
        return (
            <div class="list">
                <button  type="submit" class="add-btn" onClick={this.addNewItem}>Add Task</button>
                {
                    this.state.todos.map((value,index)=>{
                        return   <div class='each-task'>
                        <input type="text" placeholder={'Task '+index} onChange={(event)=>{this.changetodos(event,index)}} onClick={(event)=>{this.changetodos1(event,index)}}/>
                        <button  className={this.state.enabled==index?"iconh":"icon"} >
                              <img className={this.state.enabled==index?"drawIconh":"drawIcon"} src="./img/drawIcon.png"  onMouseOver={(event)=>{this.changetodos(event,index)}}></img>
                        </button>
                      </div>;
                    })
                }
            </div>
        )
    }
}
//script
export default Button;