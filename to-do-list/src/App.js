//Run this code after cloning the repository, to install all used modules and libraries.
// npm install react-scripts start react-router-dom react-scroll react-modal web-vitals
import logo from './logo.svg';
import './App.css';
import Reviews from './Components/Reviews/Reviews.js'
import MainPage from './Components/MainPage/MainPage.js'
import Footer from './Components/Footer/Footer.js'
import Navbar from './Components/Navbar/Navbar.js'
// import ToDoList from './Components/ToDoList.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Todo_Card from './Components/Todo-Card/Todo-Card.js'
import Section1 from './Components/MainPage/Section-1/section-1.js'
import Section2 from './Components/MainPage/Section-2/section-2.js'
import Section3 from './Components/MainPage/Section-3/section-3.js'
import Section4 from './Components/MainPage/Section-4/section-4.js'
import Section5 from './Components/MainPage/Section-5/section-5.js'
// npm install react-router-dom
function App() {
    return (
        <Router>
            <div className="App">
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
                <Route component={Navbar}/>
                <Switch>
                    <Route exact path='/ivanganatra'
                       render={props =>
                        <div>
                            <Section1 />
                            <Section2 />
                            <Section3 />
                            <Section4 />
                            <Section5 />
                            <Reviews/>
                            <Footer/>
                        </div>
                      }>
                    </Route>
                    <Route path='/ivanganatra/Card' component={Todo_Card}/>
                    <Route path='/ivanganatra/Reviews'
                        component={Reviews}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
