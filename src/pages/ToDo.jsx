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
  const [isEdit, setIsEdit] = useState(false)

  const addToDo = (e) => {
    e.preventDefault()
    setToDoItems([...toDoItems, newItem])
    setNewItem(defaultTodo)
  }

  const updateToDo = (e) => {
    e.preventDefault()
    let updatedToDos = toDoItems.map(item => {
      if(item.id === newItem.id){
        return newItem
      }else{
        return item
      }
    })
    setToDoItems(updatedToDos)
    setNewItem(defaultTodo)
    setIsEdit(false)
  }

  const changeStatus = (e,id) =>{
    let ToDos = toDoItems.map(item => {
      if(item.id === id){
        return {...item, isCompleted : e.target.checked}
      }else{
        return item
      }
    })
    setToDoItems(ToDos)
  }

  const editTodo = (id) => {
    setNewItem(toDoItems.find(item => item.id === id))
    setIsEdit(true)
  }

  const deleteTodo = (id) => {
    setToDoItems(toDoItems.filter(item => item.id !== id))
  }

  return (
    <section className="todo_wrapper mt-2">
      <div className="container py-1 ">
        <div className="row d-flex justify-content-center h-100">
          <div className="col">
          <div className="card" id="list1" >
            <ToDoInput newItem={newItem} setNewItem={setNewItem} addToDo={addToDo} isEdit={isEdit} updateToDo={updateToDo} />
            <ToDoList toDoItems={toDoItems} editTodo={editTodo} deleteTodo={deleteTodo} changeStatus={changeStatus} />
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ToDo;