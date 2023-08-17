
export const getEmployeesApi = async () =>{
    let employeesData = await fetch('https://dummy.restapiexample.com/api/v1/employees')
    .then((response) => response.json())
    .then((response) => response.data)
    .catch((err)=> console.log(err));
    return employeesData
}

export const createEmployeesApi = (employee) =>{
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

export const updateEmployeeApi = (form,recordId) =>{
  fetch(`https://dummy.restapiexample.com/api/v1/update/${recordId}`, {
  method: 'PUT',
  body: JSON.stringify(form),
  headers: {
  'Content-type': 'application/json; charset=UTF-8',
  },
  })
.then((response) => response.json())
.then((json) => console.log(json));
}

export const deleteEmployeeApi = (recordId) =>{
  fetch(`https://dummy.restapiexample.com/api/v1/delete/${recordId}`, {
  method: 'DELETE',
  headers: {
  'Content-type': 'application/json; charset=UTF-8',
  },
  })
.then((response) => response.json())
.then((json) => console.log(json));
}