import * as React from 'react';

export default function ToDoInput({ newItem, setNewItem, addToDo, isEdit, updateToDo }) {

    return (
        <div className="card-body py-4 px-4 px-md-5">
            <p className="h1 text-center mt-3 mb-4 pb-3 text-success">
                <h1 className='text-center'>Task Tracker</h1>
            </p>
            <div className="pb-2">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={ isEdit ? updateToDo :  addToDo} autoComplete='off'>
                            <div className="d-flex flex-row align-items-center">
                                <input type="text" className="form-control form-control-md" id="exampleFormControlInput1"
                                    value={newItem.task} onChange={e => setNewItem({ ...newItem, task: e.target.value })}
                                    required placeholder="Type here..." />
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                            <button type="submit" className="btn btn-success my-3 mx-2">{isEdit ? 'Update' : 'Add New Task'}</button>
                            {isEdit ? <button type="submit" className="btn btn-danger my-3 mx-2">Cancel</button>: null}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>



    );
}