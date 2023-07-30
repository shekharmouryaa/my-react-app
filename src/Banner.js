import React, { useEffect, useState } from 'react';
import { RegisterstaionForm } from './RegisterstaionForm';
import { UserDataTable } from './UserDataTable';

const Banner = () => {
  
  const defaultForm = {
    id: new Date().getMilliseconds(),
    name: '',
    email: '',
    password: ''
  }
  
  const [edit, setEdit] = useState(false)
  const [form, setForm] = useState(defaultForm)
  const [records, setRecords] = useState([])

  // (READ) - Getting records from locastorage 
  const localData = JSON.parse(localStorage.getItem("userData"))


  // To display localstorgae Data in the table

  useEffect(() => {
    if (localData) {
      setRecords(localData)
    } else {
      setRecords([])
    }
    // eslint-disable-next-line 
  }, [])

// (DELETE) - Delete the selected entery

  const deleteRecords = (id) => {
    const enteries = records.filter((item) => item.id !== id)
    setRecords(enteries)
    localStorage.setItem('userData', JSON.stringify(enteries))
  }

  // (UPDATE) - (PART-1) Funtion that fill form with selected entry
  const EditRecords = (id) => {
    setEdit(true)
    const selectedEnterie = records.filter((item) => item.id === id)
    setForm(selectedEnterie[0])
  }

  // (UPDATE) - (PART-2) Funtion that update the form
  const updateForm = (e) => {
    e.preventDefault();
    const updatedEnteries = records.map((item) => {
      if (item.id === form.id) {
        return form
      } else {
        return item
      }
    })
    setRecords(updatedEnteries)
    localStorage.setItem('userData', JSON.stringify(updatedEnteries))
    setForm(defaultForm)
    setEdit(false)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

//(CREATE) - Funtion that add new entry
  const submitForm = (e) => {
    e.preventDefault();
    const enteries = [...records, form]
    setRecords(enteries)
    localStorage.setItem('userData', JSON.stringify(enteries))
    setForm(defaultForm)
  }

  return (
    <div>
      <div class="container col-xl-10 col-xxl-8 px-4 py-5">
        <div class="row align-items-center g-lg-5 py-5">
          <div class="col-lg-7 text-center text-lg-start">
            <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">Vertically centered hero sign-up form</h1>
            <p class="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
          </div>
          <RegisterstaionForm updateForm={updateForm} edit={edit} form={form} submitForm={submitForm} handleChange={handleChange} />
          <UserDataTable records={records} deleteRecords={deleteRecords} EditRecords={EditRecords} />
        </div>
      </div>
    </div>
  )
}

export default Banner