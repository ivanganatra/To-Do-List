import logo from './logo.svg';
import './App.css';
import Greet from './Components/Component.js'
import {Components} from './Components/Component.js'
import Welcome from './Components/Welcome.js'
import Reviews from './Components/Reviews.js'
import ToDoList from './Components/ToDoListCount.js'
import MainPage from './Components/MainPage.js'
import Parent from './Components/Parent.js'
import Footer from './Components/Footer.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// npm install react-router-dom
function App() {
    return (
        <Router>
            <div className="App">
                {/* Header here */}
                <Switch>
                    <Route exact path='/'
                        component={MainPage}/>
                    <Route path='/Reviews'
                        component={Reviews}/>
                    <Route path='/ToDoList'
                        component={ToDoList}/>
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
