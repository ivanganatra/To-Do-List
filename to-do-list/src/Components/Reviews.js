import React,{Component} from 'react';
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
            Rahul:"I have Alzymer issues, and TodoList gave me a new Life, now the only thing I need to remember is that I need to open this app daily.",
            count:0,
        }
    }
    changemessage(){
        this.setState((prevState)=>{
            const x=prevState.count
            console.log(x)
            if(x==0)
            {
                return{
                    count:x+1,
                    reviews:this.state.Soumya,
                    writtenBy:"Soumya"
                }
            }
            else if(x==1)
            {
                return{
                    count:(x+1)%3,
                    reviews:this.state.Rahul,
                    writtenBy:"Rahul",
                }
            }
            return{
                   count:(x+1)%3,
                   reviews:this.state.Ivan,
                   writtenBy:"Ivan",
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
            {/* // will assign handler */}
            <button onClick={()=>this.changemessage()} >Button</button>

            </div>
        )
    }
}
export default Reviews