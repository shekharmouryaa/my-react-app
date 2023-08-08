import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const DummyApiExample = () => {

    const [userdata, setUserData] = React.useState([])

    const getApiData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => { setUserData(users) })
            .catch(error => console.error("error", error))
    }

    useEffect(() => {
        getApiData()
    }, [])


    return (
        <div>
            <h1>JSON Placeholder Api Example</h1>
            <Link to="/" >HOME</Link>
            <div>
                <h4>Users Data</h4>
                {userdata.length > 0 && <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Company name</th>
                            <th>City Adrress</th>
                            <th>Phone number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userdata.map((user) => (
                            <tr key={user?.id}>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{user?.company?.name}</td>
                                <td>{user?.address?.city}</td>
                                <td>{user?.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>}
            </div>
        </div>
    )
}
