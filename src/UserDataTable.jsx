import React from 'react'

export const UserDataTable = ({editRecords,deleteRecords,userdata}) => {
    
    return (
        <div>
            <div className='table-wrapper'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userdata?.users?.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>
                                <span className='btn btn-danger pointer-cursor ' onClick={() => deleteRecords(item.id)}>{"Delete"}</span>
                                <span className='btn btn-info pointer-cursor mx-2' onClick={() => editRecords(item.id)} >{"Edit"}</span>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
                {userdata?.users?.length === 0 ? <h4 className='m-3 text-center'>{"No Records found"}</h4> : null}

            </div>
        </div>
    )
}
