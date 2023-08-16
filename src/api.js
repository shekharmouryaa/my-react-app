
export const getEmployees = async (setRecords) =>{

    let employeesData = await fetch('https://dummy.restapiexample.com/api/v1/employees')
    .then((response) => response.json())
    .then((response) => setRecords(response.data))
    .catch((err)=> console.log(err));

    return employeesData

}

export const createEmployees = (employee) =>{
    fetch('https://dummy.restapiexample.com/api/v1/create', {
  method: 'POST',
  body: JSON.stringify(employee),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

}

