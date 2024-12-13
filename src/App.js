import './App.css';
import image from './time-organization.jpg';
import imageTwo from './time-organization-two.jpg';
import { ToDoList } from './ToDoList';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <img className='imageTodo' src={ image } width="250px" alt="todolist"/>
      </div>
      <div className='container'>
        <h1>My To Do List</h1>
      </div>
      <ToDoList/>
      <div className='container'>
        <img className='imageTodo' src={ imageTwo } width="250px" height="100px" alt='todolist' />
      </div>     
    </div>
  );
}

export default App;
