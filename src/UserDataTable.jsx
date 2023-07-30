import React from 'react'

export const UserDataTable = ({ records, deleteRecords }) => {
    return (
        <div>
            <div className='table-wrapper'>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Password</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                                <td><span className='btn btn-danger pointer-cursor ' onClick={() => deleteRecords(item.name)}>{"Delete"}</span></td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
                {records.length === 0 ? <h4 className='m-3 text-center'>{"No Records found"}</h4> : null}

            </div>
        </div>
    )
}
