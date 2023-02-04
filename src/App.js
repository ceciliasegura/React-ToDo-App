import './App.css';
import Form from './components/Form';
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import ToDoList from './components/ToDoList';

const KEY = "todoApp.task";

function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (value) => {
    const newTask = {
      id: uuidv4(),
      value: value,
      completed: false,
      tags: []
    };

    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
    localStorage.setItem(KEY, JSON.stringify(newTasks));
  };

  const completeTask= (id)=>{
    const updatedObjects = tasks.map(obj => {
      if (obj.id === id) {
        return { ...obj, completed: true };
      }
      return obj;
    });
    setTasks(updatedObjects);
    localStorage.setItem(KEY, JSON.stringify(updatedObjects));
  }


  const deleteTask = (id) => {
    const updatedObjects = tasks.filter(obj => obj.id !== id);
    setTasks(updatedObjects);
    localStorage.setItem(KEY, JSON.stringify(updatedObjects));
  }

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(KEY));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  return (
    <div className="App">
      <Form addTask={addTask} />
      <ToDoList tasks={tasks} deleteTask={deleteTask} completeTask={completeTask}/>
    </div>
  );
}

export default App;
