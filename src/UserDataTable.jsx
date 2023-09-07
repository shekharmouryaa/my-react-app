import React from 'react'

export const UserDataTable = ({ records, ConfirmDelete,EditRecords }) => {

    const sordtedRecords = records?.sort((a,b) => {
        return  a?.name?.localeCompare(b?.name)
    })

    return (
        <div>
            <div className='table-wrapper'>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">City</th>
                            <th scope="col">Occupation</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sordtedRecords?.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{item?.name}</td>
                                <td>{item?.email}</td>
                                <td>{item?.phoneNumber}</td>
                                <td>{item?.city}</td>
                                <td>{item?.occupation}</td>
                                <td>
                                <span className='btn btn-danger pointer-cursor ' onClick={() => ConfirmDelete(item._id)}>{"Delete"}</span>
                                <span className='btn btn-info pointer-cursor mx-2 ' onClick={() => EditRecords(item._id)}>{"Edit"}</span>
                                </td>
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
