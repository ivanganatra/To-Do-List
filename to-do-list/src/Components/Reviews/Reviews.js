import React,{Component} from 'react';
import './Reviews.css'
class Reviews extends Component{
    constructor(){
        super()
        //state is a reserve keyword
        this.state={
            //message is a reserve keyword
            heading:"Reviews",
            writtenBy:"Ivan",
            reviews:"I am a software engineer, and I love to pay for things that save me from wasting my time, TodoList is my top priority.",
            Ivan:"I am a software engineer, and I love to pay for things that save me from wasting my time, TodoList is my top priority.",
            Soumya:"I am a bussinesswomen, and prioritizing the meetings is what I crave for.This app always gave me a quick overview of my scheduled meetings whole day.",
            Rahul:"Rahul have Alzymer issues, and TodoList gave me a new Life, now the only thing I need to remember is that I need to open this app daily.",
            count:0,
        }
    }
    changemessage(change){
        this.setState((prevState)=>{
            let review=[this.state.Ivan,this.state.Soumya,this.state.Rahul]
            let name=["Ivan","Saumya","Rahul"];
            // const store=this.name[1]
            console.log("1  "+this.state.count+" "+prevState.count+" "+change);
            let x;
            if(change==-1 && this.state.count==0)
                x=2;
            else
                x=(prevState.count+change)%3;
            return{
                count:x,
                writtenBy:name[this.state.count],
                reviews:review[this.state.count]
            }
        }
        )
    }
    render(){
        // return <h1>This is the class,component.</h1>;
        console.log(this.state.reviews)
        return (
            <div className="Reviews">
                <div className="EachReview">
                    <h1>{this.state.heading}</h1>
                    <h2>{this.state.reviews}</h2>
                    <h3>{this.state.writtenBy}</h3>
                </div>
                <div className="Buttons">
                    <button onClick={()=>this.changemessage(-1)}>Left </button>
                    <button onClick={()=>this.changemessage(1)}> Right </button>
                </div>
            </div>
        )
    }
}
export default Reviews