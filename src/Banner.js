import React, { useEffect, useState } from 'react';
import { RegisterstaionForm } from './RegisterstaionForm';
import { UserDataTable } from './UserDataTable';

const Banner = () => {

  const [clicked, setClicked] = useState(false)
  const [show, setShow] = useState(false)

  const defaultForm = {
    name: '',
    email: '',
    password: ''
  }

  const [form, setForm] = useState(defaultForm)
  const [records, setRecords] = useState([])
  const localData = JSON.parse(localStorage.getItem("userData"))

  useEffect(() => {
    if (localData) {
      setRecords(localData)
    } else {
      setRecords([])
    }
  }, [])


  const deleteRecords = (username) => {
    const enteries = records.filter((item) => item.name !== username)
    setRecords(enteries)
    localStorage.setItem('userData', JSON.stringify(enteries))
  }


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const submitForm = (e) => {
    e.preventDefault();
    const enteries = [...records, form]
    setRecords(enteries)
    localStorage.setItem('userData', JSON.stringify(enteries))
    setForm(defaultForm)
  }

  return (
    <div>
      <button className='btn btn-warning mt-2'
        onClick={() => setClicked(!clicked)}> {clicked ? "Switch OFF" : "Switch ON"} </button>
      <button className='btn btn-info mt-2 ms-3'
        onClick={() => setShow(!show)}> {show ? "Hide Form" : "Show form"} </button>
      <div class="container col-xl-10 col-xxl-8 px-4 py-5">
        <div class="row align-items-center g-lg-5 py-5">
          <div class="col-lg-7 text-center text-lg-start">
            <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">Vertically centered hero sign-up form</h1>
            <p class="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
          </div>
          <RegisterstaionForm form={form} submitForm={submitForm} handleChange={handleChange} />
          <UserDataTable records={records} deleteRecords={deleteRecords} />
        </div>
      </div>
    </div>
  )
}

export default Banner