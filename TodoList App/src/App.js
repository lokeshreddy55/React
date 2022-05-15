import "./App.css";
import Header from "./MyComponents/Header";  //default import  **
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import { Footer } from "./MyComponents/Footer";
import { About } from "./MyComponents/About";
import React, { useEffect, useState } from "react";
import {                                       //react router
  BrowserRouter as Router,
  Routes,     //Switch ***
  Route,
} from "react-router-dom";

function App() {

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));   //JSON Imp ***
  }

  const onDelete = (todo) => {
    console.log("Are you sure to delete ..", todo);
    /*   It will not work in react, so we use usestate hook  *** 
     let index = todos.indexOf(todo);
     todos.splice(index,1);
     */

    setTodos(todos.filter((ele) => {
      return ele !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);          //initial value **
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="My Todos List" />
        <Routes>
          <Route exact path="/" element={                 //rendering multiple comp
            <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
                </>
           } />
          <Route exact path="/about" element = {<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
