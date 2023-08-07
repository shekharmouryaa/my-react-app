import React from 'react'
import deleteIcon from '../assets/delete-button.svg'
import editIcon from '../assets/edit-button.svg'
function ToDoList({ toDoItems, editTodo, deleteTodo, changeStatus }) {
  
  return (
    <div className='px-5 mb-4'>
      <p className="h4 text-center mt-1 text-success">
        <h3 className='text-center'>To Do List</h3>
      </p>
      {toDoItems.length ? toDoItems?.map((item, index) => (
        <div className="card my-3" key={index}>
          <div className="card-body ">
            <div className='d-flex justify-content-between'>
                <div class="checkbox-wrapper-19">
                  <input type="checkbox" id={`cbtest-${index}`} onChange={(e) => changeStatus(e, item.id)} />
                  <label for={`cbtest-${index}`} class="check-box"/>
                <span className={`mx-2 ${item.isCompleted ? 'task-done' : ''}`}>
                  {item.task}
                  </span>
                </div>
              <div>
                <img role="button" className='mx-2' width={25} src={editIcon} alt='icon' onClick={() => editTodo(item.id)} />
                <img role="button" className='mx-2' width={25} src={deleteIcon} alt='icon' onClick={() => deleteTodo(item.id)} />
              </div>
            </div>
          </div>
        </div>
      )) : <div className='p-2 text-center'>
        List is Empty
      </div>
      }
    </div>
  )
}

export default ToDoList;