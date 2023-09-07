
const BASE_URL = "https://mern-admin-backend-jxw3.onrender.com"

export const getEmployeesApi = async () =>{
    let employeesData = await fetch(`${BASE_URL}/general/users`)
    .then((response) => response.json())
    .then((response) => response)
    .catch((err)=> console.log(err));
    return employeesData
}

export const createEmployeesApi = (employee) =>{
    fetch(`${BASE_URL}/general/user/add`, {
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
  fetch(`${BASE_URL}/general/user/update/${recordId}`, {
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
  fetch(`${BASE_URL}/general/user/delete/${recordId}`, {
  method: 'DELETE',
  headers: {
  'Content-type': 'application/json; charset=UTF-8',
  },
  })
.then((response) => response.json())
.then((json) => console.log(json));
}