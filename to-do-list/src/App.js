import logo from './logo.svg';
import './App.css';
import Greet from './Components/Component.js'
import {Components} from './Components/Component.js'
import Welcome from './Components/Welcome.js'
import  Reviews from './Components/Reviews.js'
import ToDoList from './Components/ToDoListCount.js'
import MainPage from './Components/MainPage.js'
import Parent from './Components/Parent.js'
function App() {
  return (
    <div className="App">
      <MainPage/>
      <Reviews />
      <ToDoList />
      <Parent/>
      </div>
  );
}

export default App;
