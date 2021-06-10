import React from 'react';
import Modal from "react-modal";
import './Navbar.css';
 class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        open: false,
        isModelOpen:false,
        isLoginOpen:false
        }
        this.togglePanel = this.togglePanel.bind(this);
        this.toggleModel = this.toggleModel.bind(this);
        this.toggleLogin=this.toggleLogin.bind(this);
        }
        togglePanel(e){
            this.setState({open: !this.state.open})
        }
        toggleModel(e){
            this.setState({isModelOpen:!this.state.isModelOpen})
        }
        toggleLogin(e){
          this.setState({isLoginOpen:!this.state.isLoginOpen})
        }



    render(){
        return(
        <div> <div style={{display:'flex',width:'100vw',backgroundColor:'#d1e0e0',fontSize:'1.5vw',fontWeight:'bold'}}>
        <div style={{display:'flex'}}><div style={{marginTop:'2vw',marginBottom:'2vw',marginLeft:'10vw',cursor:'pointer'}}>Home</div>
        <div style={{marginTop:'2vw',marginBottom:'2vw',marginLeft:'10vw',cursor:'pointer'}} onClick={(e)=>this.togglePanel(e)}>Your Todos</div></div>
        <div style={{display:'flex',marginLeft:'auto'}}> <div style={{marginTop:'2vw',marginBottom:'2vw',marginRight:'10vw',cursor:'pointer'}} onClick={(e)=>this.toggleLogin(e)}>Login</div>
        <div  style={{marginTop:'2vw',marginBottom:'2vw',marginRight:'10vw',cursor:'pointer'}} onClick={(e)=>this.toggleModel(e)}>SignUp</div></div>
    </div>
    {this.state.open ? (
        <div className="navbar">
        <div>TodoList1</div>
        <div>TodoList1</div>
        <div>TodoList1</div>
        <div>TodoList1</div>
        <div>TodoList1</div>
        </div>
        ) : null}
         <Modal

style={{
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
    content: {
      position: 'absolute',
      top: '40px',
      marginRight:'auto',
      marginLeft:'auto',
      bottom: '40px',
      border: '1px solid #ccc',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px',
      width:'30vw',
      height:'auto'
    }
  }}

        isOpen={this.state.isModelOpen}
        onRequestClose={this.toggleModel}
        contentLabel="My dialog"
      >
        <h1 style={{textAlign:'center'}}>SignUp</h1>
        <div style={{display:'flex',flexWrap:'wrap',flexDirection:'column',width:'100%'}}>
                <div style={{width:'100%',textAlign:'left',fontSize:'1.5vw',marginTop:'2px'}}><label  for="name">Name</label>
                <div><input style={{width:'100%' ,borderRadius:2,border:0,height:'3vw',marginTop:2,backgroundColor:'#f5f5f0',fontSize:'1.5vw'}} type="text" id="name" name="name"/></div></div>
    
                     <div style={{width:'100%',textAlign:'left' ,fontSize:'1.5vw',marginTop:'2px'}}><label for="email">Email</label>
                <div><input  style={{width:'100%' ,borderRadius:2,border:0,height:'3vw',marginTop:2,backgroundColor:'#f5f5f0',fontSize:'1.5vw'}} type="text" id="email" name="email"/></div></div>
                <div style={{width:'100%' ,textAlign:'left' ,fontSize:'1.5vw',marginTop:'2px'}}><label for="password">Password</label>
                <div><input  style={{width:'100%' ,borderRadius:2,border:0,height:'3vw',marginTop:2,backgroundColor:'#f5f5f0',fontSize:'1.5vw'}} type="password" id="password" name="password"/></div></div>
                <div style={{width:'100%' ,textAlign:'left' ,fontSize:'1.5vw',marginTop:'2px'}}><label for="confirmpassword">Confirm Password</label>
                <div><input  style={{width:'100%' ,borderRadius:2,border:0,height:'3vw',marginTop:2,backgroundColor:'#f5f5f0',fontSize:'1.5vw'}} type="password" id="confirmpassword" name="confirmpassword"/></div></div>
                <input type="submit" value="SignUp"  onClick={(e)=>this.toggleModel(e)} style={{
                  backgroundColor:'#D8EF04',
                  marginTop:8,
                  border:0,
                  borderRadius:4,
                  width:'6vw',
                  height:'3vw',
                  marginLeft:'auto',
                  marginRight:'auto',
                  fontSize:'1.3vw',
                  marginTop:'10vh'
                } } />
          </div>
      </Modal>
      <Modal

style={{
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
    content: {
      position: 'absolute',
      top: '40px',
      marginRight:'auto',
      marginLeft:'auto',
      bottom: '40px',
      border: '1px solid #ccc',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px',
      width:'30vw',
      height:'60vh'
    }
  }}

        isOpen={this.state.isLoginOpen}
        onRequestClose={this.toggleLogin}
        contentLabel="My dialog"
      >
        <h1 style={{textAlign:'center'}}>Login</h1>
        <div style={{display:'flex',flexWrap:'wrap',flexDirection:'column',width:'100%'}}>
                     <div style={{width:'100%',textAlign:'left' ,fontSize:'1.5vw',marginTop:'2px'}}><label for="email">Email</label>
                <div><input  style={{width:'100%' ,borderRadius:2,border:0,height:'3vw',marginTop:2,backgroundColor:'#f5f5f0',fontSize:'1.5vw'}} type="text" id="email" name="email"/></div></div>
                <div style={{width:'100%' ,textAlign:'left' ,fontSize:'1.5vw',marginTop:'2px'}}><label for="password">Password</label>
                <div><input  style={{width:'100%' ,borderRadius:2,border:0,height:'3vw',marginTop:2,backgroundColor:'#f5f5f0',fontSize:'1.5vw'}} type="password" id="password" name="password"/></div></div>
                <input type="submit" value="Login"  onClick={(e)=>this.toggleLogin(e)} style={{
                  backgroundColor:'#D8EF04',
                  marginTop:8,
                  border:0,
                  borderRadius:4,
                  width:'6vw',
                  height:'3vw',
                  marginLeft:'auto',
                  marginRight:'auto',
                  fontSize:'1.3vw',
                  marginTop:'10vh'
                } } />
          </div>
      </Modal>
        </div>);
    }
 }
 export default Navbar;
