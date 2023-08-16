import React, { useEffect, useState } from 'react';
import { RegisterstaionForm } from './RegisterstaionForm';
import { UserDataTable } from './UserDataTable';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { toast } from 'react-toastify';
import ConfirmDialog from './ConfirmDialog';
import { createEmployees, getEmployees } from './api';


const Banner = () => {
  
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 2,
    p: 4,
  };

  const defaultForm = {
    name: '',
    age: '',
    salary: ''
  }

  const [show, setShow] = useState(false)
  const [edit, setEdit] = useState(false)
  const [form, setForm] = useState(defaultForm)
  const [records, setRecords] = useState([])
  const [open, setOpen] = useState(false)
  const [alert, setAlert] = useState(false)
  const [recordId, setRecordId] = useState("")

  const handleOpen = () => {
    setOpen(true)
    setEdit(false)
    setShow(true)
    setForm(defaultForm)
  }

  const handleClose = () => {
    setOpen(false)
    setShow(false)
  }



  useEffect(() => {
    getEmployees(setRecords)
    // eslint-disable-next-line 
  }, [])


  // (DELETE) - Delete the selected entery
  const ConfirmDelete =(id)=>{
    handleClickOpen()
    setRecordId(id)
  }
  const deleteRecords = () => {
    const enteries = records.filter((item) => item.id !== recordId)
    setRecords(enteries)
    localStorage.setItem('userData', JSON.stringify(enteries))
    toast.success("Data Deleted Succesfully");
    handleClickClose()
  }

 // confirm Dialog open 
 const handleClickOpen = () => {
  setAlert(true);
  };
  
  // confirm Dialog close
  const handleClickClose = () => {
    setAlert(false);
  };
  // (UPDATE) - (PART-1) Funtion that fill form with selected entry

  const EditRecords = (id) => {
    handleOpen()
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
    handleClose()
    toast.success("Data Updated Succesfully");
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  //(CREATE) - Funtion that add new entry

  const submitForm = (e) => {
    e.preventDefault();
    createEmployees(form)
    setForm(defaultForm)
    handleClose()
    toast.success("Data Submit Succesfully");
  }

  return (
    <div>
      <div class="container wrapper  px-4">
        <div class="row align-items-center py-5">
          <div>
            <button type="button" class="btn btn-dark me-2"onClick={handleOpen} >{show ? "Close" : "Create Employee"}</button>
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <RegisterstaionForm updateForm={updateForm} edit={edit} form={form} submitForm={submitForm} handleChange={handleChange} handleClose={handleClose} />
              <div class="text-center">
               <button className='btn btn-danger mt-4' onClick={handleClose} >Close</button>
              </div>
            </Box>
          </Modal>
          <UserDataTable records={records} ConfirmDelete={ConfirmDelete} EditRecords={EditRecords} />
          <ConfirmDialog alert={alert} handleClickClose={handleClickClose} deleteRecords={deleteRecords} />
        </div>
      </div>
    </div>
  )
}

export default Banner