import React from 'react'
import './ToDoList.css'
class ToDoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
             email:"",
             loop:0

        }
        this.changeEmail=this.changeEmail.bind(this);
        this.listitems=this.listitems.bind(this);
    }
    changeEmail(event){
        this.setState({email:event.target.value});
    }
    listitems(placeholder)
    {
        const id=this.state.loop;
        // this.setState((prevState)=>{return {loop:prevState.loop+1};});
        console.log(id);
        return(
            <input className={id} type="text" value={this.state.email} placeholder={placeholder} onChange={this.changeEmail}/>
        );
    }
    render(){
        return (
        <div className="to-do-list">
            <div class="left-list">
                <div class="list">
                {this.listitems("Hotel")}
                {this.listitems("Hotel")}
                {this.listitems("Hotel")}
                {this.listitems("Hotel")}
                {this.listitems("Hotel")}
                {this.listitems("Hotel")}
                    <li>Hotel</li>
                    <li>Flight</li>
                    <li>Car Rental</li>
                    <li>Tours</li>
                    <li>Hotel</li>
                    <li>Flight</li>
                    <li>Car Rental</li>
                    <li>Tours</li>
                    <li>Hotel</li>
                    <li>Flight</li>
                    <li>Car Rental</li>
                    <li>Tours</li>
                    <li>Hotel</li>
                    <li>Flight</li>
                    <li>Car Rental</li>
                    <li>Tours</li>
                    <li>Hotel</li>
                    <li>Flight</li>
                    <li>Car Rental</li>
                    <li>Tours</li>
                    <li>Hotel</li>
                    <li>Flight</li>
                    <li>Car Rental</li>
                    <li>Tours</li>
                    <li>Hotel</li>
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
