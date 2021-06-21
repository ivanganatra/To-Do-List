import React from 'react'
import Button from  './Button.js'
import './ToDoList.css'
class ToDoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
             todos:[],
             isClicked:"false"
        }
    }
    render(){
        return (
        <div className="to-do-list">
            <div class="left-list">
                <Button />
            </div>
        </div>
        )
    }
}
//script
export default ToDoList;