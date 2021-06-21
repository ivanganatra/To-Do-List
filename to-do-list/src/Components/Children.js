import React, { Component } from 'react'

class Children extends Component {
        constructor(props){
            super(props);
        }
    render(props) {
        return (
            <div>
                <button onClick={()=>this.props.greetHandler('child')}>Greet Parent</button>
            </div>
        )
    }
}

export default Children
