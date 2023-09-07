import React, { useEffect, useState } from 'react';
import { RegisterstaionForm } from './RegisterstaionForm';
import { UserDataTable } from './UserDataTable';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { toast } from 'react-toastify';
import ConfirmDialog from './ConfirmDialog';
import { createEmployeesApi, getEmployeesApi, updateEmployeeApi,deleteEmployeeApi } from './api';

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
    email: '',
    phoneNumber:'',
    city: '',
    occupation:'',
    password:''
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

  const getEmployeesRecord = async () =>{
    const apiResponse = await getEmployeesApi()
    if(apiResponse){
      setRecords(apiResponse)
    }
  }

  useEffect(() => {
    getEmployeesRecord()
  }, [])


  // (DELETE) 
  const ConfirmDelete =(id)=>{
    handleClickOpen()
    setRecordId(id)
  }
  const deleteRecords = () => {
    deleteEmployeeApi(recordId)
    toast.success("Data Deleted Succesfully");
    getEmployeesRecord()
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
    setRecordId(id)
    handleOpen()
    setEdit(true)
    const selectedEmployee = records.filter((item) => item._id === id)
    setForm({
      name: selectedEmployee[0].name,
      email:selectedEmployee[0].email,
      phoneNumber: selectedEmployee[0].phoneNumber,
      city: selectedEmployee[0].city,
      occupation: selectedEmployee[0].occupation,
      password: selectedEmployee[0].password
    })
  }

  // (UPDATE) - (PART-2) Funtion that update the form

  const updateForm = (e) => {
    e.preventDefault();
    updateEmployeeApi(form,recordId)
    setForm(defaultForm)
    setEdit(false)
    handleClose()
    toast.success("Data Updated Succesfully");
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  //(CREATE) 
  const submitForm = (e) => {
    e.preventDefault();
    createEmployeesApi(form)
    setForm(defaultForm)
    handleClose()
    toast.success("Data added Succesfully");
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