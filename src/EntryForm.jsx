
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { creditAmount, debitAmount } from './redux/action'
 
const EntryForm = () => {

const defaultForm = {
    chequeNumber : "",
    amount:"",
    type:"",
    currentBalance : 0
  }
  const [form, setForm] = useState(defaultForm)

  const dispatch = useDispatch()

  const handleChange = (e) => {
    if(e.target.name === "amount"){
      setForm({ ...form, [e.target.name]: Number(e.target.value) })
    }else{
      setForm({ ...form, [e.target.name]: e.target.value })
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(form);
    if(form.type ==="credit"){
      dispatch(creditAmount(form))
    }else{
      dispatch(debitAmount(form))
    }
    setForm(defaultForm)
  }


  return (
    <div>
         <h1>Entry Form </h1>
            <form className="ui form card mx-auto col-md-6 m-2 p-5" onSubmit={(e) => handleSubmit(e)}>
                <div className='field' ><h3>Deposit</h3></div>
                <div className="field m-3">
                    <label className='form-label text-start'>Cheque Number:</label>
                    <input className='form-control' name='chequeNumber' type='number' value={form.chequeNumber} onChange={e => handleChange(e)} />
                </div>
                <div className="field">
                    <label className='form-label text-start'>Amount:</label>
                    <input className='form-control' name='amount' type='number' value={form.amount} onChange={e => handleChange(e)} />
                </div>
                <div className="field">
                    <label className='form-label text-start'>Type:</label>
                    <input name='type' className='m-2' id="credit" type='radio' value={"credit"} checked={form.type ==="credit" ? true : false} onChange={e => handleChange(e)} /> 
                    <label  className='form-label text-start'htmlFor='credit'>Credit</label>
                    <input name='type' className='m-2' id="debit" type='radio' value={"debit"} checked={form.type ==="debit" ? true : false} onChange={e => handleChange(e)} /> 
                    <label className='form-label text-start' htmlFor='debit'>Debit</label>
                    
                </div>
                <button type='submit' className='btn btn-dark'>Submit</button>
            </form>
    </div>
  )
}

export default EntryForm