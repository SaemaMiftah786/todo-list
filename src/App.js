import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import About from './MyComponents/About';
import { useState, useEffect } from 'react';
import AddTodo from './MyComponents/AddTodo';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  let initTodo;
    
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  const addTodo = (title, desc) => {
    console.log("I am adding this todod")
    let sno = '';
    if (todos.length === 0){
      sno = 1;
    }else{
      sno = todos[todos.length-1].sno+1;
      console.log(sno)
    }
    const myTodo = {
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos, myTodo]);
      
  }
  
  const onDelete = (todo) => {
    console.log("I am on delete todo", todo)
    setTodos(todos.filter((e) =>{
      return e!==todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  
  const [todos, setTodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  

  return (
    <>
    

    <Router>
    <Header title="My Todos List" />
        <Routes>         
          <Route exact path="/about" element={<About/>}>
            
          </Route>
          <Route exact path="/" element={
              <div className="container">
              <AddTodo addTodo={addTodo}/>
              <Todos todos={todos} onDelete={onDelete}/>
              </div>
           }>
          </Route>
        </Routes>
      <Footer/>
    </Router>
    </>
    
  );
}

export default App;
