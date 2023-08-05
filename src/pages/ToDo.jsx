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
    <div>
      <ToDoInput newItem={newItem} setNewItem={setNewItem} addToDo={addToDo}/>
      <ToDoList/>
    </div>
  )
}
export default ToDo;