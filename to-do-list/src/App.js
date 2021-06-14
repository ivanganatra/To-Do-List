import logo from './logo.svg';
import './App.css';
import Greet from './Components/Component.js'
import {Components} from './Components/Component.js'
import Welcome from './Components/Welcome.js'
import Reviews from './Components/Reviews.js'
import ToDoListCounter from './Components/ToDoListCount.js'
import MainPage from './Components/MainPage.js'
import Parent from './Components/Parent.js'
import Footer from './Components/Footer.js'
import Navbar from './Components/Navbar.js'
import ToDoList from './Components/ToDoList.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Card from './Components/Card.js'
// npm install react-router-dom
function App() {
    return (
        <Router>
            <div className="App">
                <Route component={Navbar}/>
                {/* <Route component={ToDoList}/> */}
                <Route component={Card}/>
                <Switch>
                    <Route exact path='/'
                        component={MainPage}/>
                    <Route path='/Reviews'
                        component={Reviews}/>
                    <Route path='/ToDoListCounter'
                        component={ToDoListCounter}/>
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
