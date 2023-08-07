import * as React from 'react';

export default function ToDoInput({ newItem, setNewItem, addToDo }) {

    return (
        <div className="card-body py-4 px-4 px-md-5">
            <p className="h1 text-center mt-3 mb-4 pb-3 text-success">
                <h1 className='text-center'>Task Tracker</h1>
            </p>
            <div className="pb-2">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={addToDo} autoComplete='off'>
                            <div className="d-flex flex-row align-items-center">
                                <input type="text" className="form-control form-control-md" id="exampleFormControlInput1"
                                    value={newItem.task} onChange={e => setNewItem({ ...newItem, task: e.target.value })}
                                    placeholder="Type here..." />
                            </div>
                            <div>
                                <button type="submit" className="btn btn-success my-3 w-100">Add New Task</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>



    );
}