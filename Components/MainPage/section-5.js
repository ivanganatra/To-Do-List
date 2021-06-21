import React from 'react'
import './section-5.css'
class section_5 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            counter:0,
        }
    }
    componentDidMount() {
        this.timer =
           setInterval(() => {this.setState({counter:this.state.counter+1
          })
          if(this.state.counter===200){
            clearInterval(this.timer);
          }
        }, 100);
      }
    render(){
        return (
            <div class="section-5">
                <div class="heading" id="one">Total Todo's created on</div>
                <div class="heading " id="two">TodoList</div>
                <div className="counter">{this.state.counter}
                </div>
        </div>
        );
    }
}
export default section_5
