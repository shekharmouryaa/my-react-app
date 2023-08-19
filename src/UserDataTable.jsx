import React from 'react'
import moment from 'moment'

export const UserDataTable = ({ records, ConfirmDelete,EditRecords }) => {

    const sordtedRecords = records?.sort((a,b) => {
        return  a?.name?.localeCompare(b?.name)
    })
    const allAge = sordtedRecords.map( val => Number(val.age)) 
    const sumOfAges = allAge.reduce((total, amount) => total + amount,0) 

    return (
        <div>
            <div className='table-wrapper'>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Age</th>
                            <th scope="col">Created At</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sordtedRecords?.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{item?.name}</td>
                                <td>{item?.email}</td>
                                <td>{item?.age}</td>
                                <td>{moment(item.created_at).format("lll")} or {moment(item.created_at).fromNow()}</td>
                                <td>
                                <span className='btn btn-danger pointer-cursor ' onClick={() => ConfirmDelete(item.id)}>{"Delete"}</span>
                                <span className='btn btn-info pointer-cursor mx-2 ' onClick={() => EditRecords(item.id)}>{"Edit"}</span>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
                {records.length === 0 ? <h4 className='m-3 text-center'>{"No Records found"}</h4> : null}
                <hr />
                <div className='text-center'>
                    <h4>{`Average Age : ${Math.round(sumOfAges/allAge.length)} ` }</h4>
                </div>

            </div>
        </div>
    )
}
