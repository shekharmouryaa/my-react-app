import * as React from 'react';

export default function ToDoInput({newItem, setNewItem , addToDo}) {

    return (
        <section className="vh-100 todo_wrapper">
            <div className="container py-1 ">
                <div className="row d-flex justify-content-center h-100">
                    <div className="col">
                        <div className="card" id="list1" >
                            <div className="card-body py-4 px-4 px-md-5">
                                <p className="h1 text-center mt-3 mb-4 pb-3 text-success">
                                    <h1 className='text-center'>To do list</h1>
                                </p>
                                <div className="pb-2">
                                    <div className="card">
                                        <div className="card-body">
                                            <form onSubmit={addToDo}>
                                            <div className="d-flex flex-row align-items-center">
                                                <input type="text" className="form-control form-control-md" id="exampleFormControlInput1"
                                                       value={newItem.task} onChange={e => setNewItem({...newItem, task: e.target.value})}
                                                    placeholder="Type here..." />
                                                <div>
                                                    <button type="submit" className="btn btn-success ms-3">Add</button>
                                                </div>
                                            </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}