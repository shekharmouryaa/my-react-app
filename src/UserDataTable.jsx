import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from './redux/action'

export const UserDataTable = () => {
    
    const userdata = useSelector((state) => state.userReducer)
    console.log(userdata.users)
 

    const dispatch = useDispatch()
    const deleteRecords = (id) => {
        let newdata = userdata.users.filter((item) => {
            return item.id !== id
        })

        dispatch(deleteUser(newdata))
      }

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
                                <span className='btn btn-info pointer-cursor mx-2 '>{"Edit"}</span>
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
