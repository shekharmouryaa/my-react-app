import React, { useState } from 'react';
import { RegisterstaionForm } from './RegisterstaionForm';
import { UserDataTable } from './UserDataTable';
import { addUser, deleteUser, updateUser } from './redux/action';
import { useDispatch, useSelector } from 'react-redux';


const Home = () => {

  const defaultForm = {
    id: new Date().getMilliseconds(),
    name: '',
    email: '',
    phone: ''
  }

  const userdata = useSelector((state) => state.userReducer)
  const [form, setForm] = useState(defaultForm)
  const [isEdit, setIsEdit] = useState(false)
  const dispatch = useDispatch()


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(addUser(form))
    setForm(defaultForm)
  }


  const deleteRecords = (id) => {
    let usersData = userdata.users.filter((item) => {
      return item.id !== id
    })
    dispatch(deleteUser(usersData))
  }


  const editRecords = (id) => {
    setIsEdit(true)
    // const seleteduser = userdata.users.filter((item) => {
    //     return item.id === id
    // })
    const seleteduserFind = userdata.users.find((item) => {
      return item.id === id
    })
    // setForm(seleteduser[0])
    setForm(seleteduserFind)
  }

  const updateForm = (e) => {
    e.preventDefault();

    const usersData = userdata.users.map((item) => {
      if (item.id === form.id) {
        return form
      }
      return item
    })
    dispatch(updateUser(usersData))
    setForm(defaultForm)
    setIsEdit(false)
  }

  return (
    <div>
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Vertically centered hero sign-up form</h1>
            <p className="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
          </div>
          <RegisterstaionForm handleChange={handleChange} form={form} submitForm={submitForm} isEdit={isEdit} updateForm={updateForm} />
          <UserDataTable editRecords={editRecords} deleteRecords={deleteRecords} userdata={userdata} />
        </div>
      </div>
    </div>
  )
}

export default Home