import { useState } from "react";

// //
// Todo Application
// PUSH TASK INTO ARRAY
// {GETUP AT 4AM, 'BRUSH MY TEETH,'STUDY REACT'}
//CREATE A STATE CALLED TODOS

export default function TodoComponent() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  function handleTodo() {
    // TO GET VALUE FROM INPUT
    // TECHNIQUE 1: DOM
    // const input = document.getElementById("todo");
    // console.log(input.value);
    // STATE TECHNIQUE : 2
    let todosCopy = [...todos];
    todosCopy.push(todo);
    setTodos(todosCopy);
    setTodo("");
  }

  //   function handleInputChange(e) {
  //     setTodo(e.target.value);
  //   }
  return (
    <div id="todo-form-container">
      <div id="form-header">
        <input
          id="todo"
          placeholder="Enter your task"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button onClick={handleTodo}>Add Task</button>
      </div>
      <div id="form-body">
        <ul>
          {todos.map((t, index) => (
            <li key={`todo-list-item${index}`}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

//TASK : 1 CREATING FUNCTIONAL COMPONENT
// TASK :2 IMPORTING AND USING THE COMPONENT
//TASK: 3 SENDING PROPS TO COMPONENT
// TASK : 4 USING THE PROPS RECEIVED AND SHOWING IT TO USER
// TASK: 5 CREATING TODO COMPONENT, ADD TODOS , SHOW ALL TODOS IN THE UI

// const nums = [1, 2, 3, 4, 5];

// var result = nums.map((a) => a + 2);
// console.log(result);
