import React, { useState } from 'react'
import ToDoInput from '../components/ToDoInput'
import ToDoList from '../components/ToDoList'
import { randomId } from '../utilities/utility'

const ToDo = () => {

  const defaultTodo = {
    id: randomId(6),
    task: '',
    isCompleted: false
  }
  const [toDoItems, setToDoItems] = useState([])
  const [newItem, setNewItem] = useState(defaultTodo)

  const addToDo = (e) => {
    e.preventDefault()
    setToDoItems([...toDoItems, newItem])
    setNewItem(defaultTodo)
  }

  return (
    <section className="todo_wrapper mt-2">
      <div className="container py-1 ">
        <div className="row d-flex justify-content-center h-100">
          <div className="col">
          <div className="card" id="list1" >
            <ToDoInput newItem={newItem} setNewItem={setNewItem} addToDo={addToDo} />
            <ToDoList toDoItems={toDoItems} />
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ToDo;