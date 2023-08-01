import React, { useEffect, useState } from 'react';
import { RegisterstaionForm } from './RegisterstaionForm';
import { UserDataTable } from './UserDataTable';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


const Banner = () => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const defaultForm = {
    id: new Date().getMilliseconds(),
    name: '',
    email: '',
    password: ''
  }

  const [show, setShow] = useState(false)
  const [edit, setEdit] = useState(false)
  const [form, setForm] = useState(defaultForm)
  const [records, setRecords] = useState([])
  const [open, setOpen] = useState(false)


  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

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
    handleClose()
  }

  return (
    <div>
      <div class="container wrapper  px-4">
        <div class="row align-items-center py-5">
          <div>
            <button type="button" class="btn btn-dark me-2"onClick={handleOpen} >{show ? "Close" : "Create"}</button>
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <RegisterstaionForm updateForm={updateForm} edit={edit} form={form} submitForm={submitForm} handleChange={handleChange} />
            </Box>
          </Modal>

          <UserDataTable records={records} deleteRecords={deleteRecords} EditRecords={EditRecords} />
        </div>
      </div>
    </div>
  )
}

export default Banner