import React from 'react'

export const PassBook = ({ entries }) => {
    return (
        <div>
            <div className='table-wrapper'>
                <table class="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Cheue Number</th>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Current Balance</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        {entries?.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{item?.chequeNumber}</td>
                                <td>{item?.type}</td>
                                <td>{item?.amount}</td>
                                <td>{item?.remainingBalance}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
                {entries.length === 0 ? <h4 className='m-3 text-center'>{"No Records found"}</h4> : null}

            </div>
        </div>
    )
}
