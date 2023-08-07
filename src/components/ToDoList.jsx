import React from 'react'
import deleteIcon from '../assets/delete-button.svg'
import editIcon from '../assets/edit-button.svg'
function ToDoList({ toDoItems }) {
  return (
    <div className='px-5 mb-4'>
      <p className="h4 text-center mt-1 text-success">
        <h3 className='text-center'>To Do List</h3>
      </p>
      {toDoItems.length ? toDoItems?.map((item,index) => (
        <div className="card my-3" key={index}>
          <div className="card-body ">
            <div className='d-flex justify-content-between'>
              <div>
                <div class="checkbox-wrapper-15">
                  <input class="inp-cbx" id="cbx-15" type="checkbox" style={{ display: "none" }} />
                  <label class="cbx" for="cbx-15">
                    <span>
                      <svg width="12px" height="9px" viewbox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>
                    <span>{item.task}</span>
                  </label>
                </div>
              </div>
              <div>
                <img className='mx-2' width={25} src={editIcon} alt='icon' />
                <img className='mx-2' width={25} src={deleteIcon} alt='icon' />
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