import React, { useState } from 'react';
import { PassBook } from './PassBook';

const MainContainer = () => {
  
  const defaultForm = {
    chequeNumber : "",
    amount:"",
    type:"",
    remainingBalance : 0
  }
  const [form, setForm] = useState(defaultForm)
  const [entries, setEnteries] = useState([])
  const [balance, setBalance] = useState(0)

  const handleChange = (e) => {
    if(e.target.name === "amount"){
      setForm({ ...form, [e.target.name]: Number(e.target.value) })
    }else{
      setForm({ ...form, [e.target.name]: e.target.value })
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(form.type ==="credit"){
      let newBalance = balance + form.amount
      let updatedForm = {...form, remainingBalance : newBalance}
      let records = entries.concat(updatedForm)
      setBalance(newBalance)
      setEnteries(records)
    }else{
      let newBal = balance - form.amount
      let updatedForm = {...form, remainingBalance : newBal}
      let records = entries.concat(updatedForm)
      setBalance(newBal)
      setEnteries(records)
    }
    setForm(defaultForm)
  }

  console.log(entries)


  return (
    <div>
      <div class="container wrapper  px-4">
        <div class="row align-items-center py-5">
          <h1>Entry Form </h1> 
          <div>
            <form className="ui form m-2 p-2" onSubmit={(e) => handleSubmit(e)}>
                <div className='field' ><h3>Add Deposit</h3></div>
                <div className="field mb-2">
                    <label>Cheque Number:</label>
                    <input name='chequeNumber' type='number' value={form.chequeNumber} onChange={e => handleChange(e)} />
                </div>
                <div className="field">
                    <label>Amount:</label>
                    <input name='amount' type='number' value={form.amount} onChange={e => handleChange(e)} />
                </div>
                <div className="field">
                    <label>Type:</label>
                    <input name='type' className='m-2' id="credit" type='radio' value={"credit"} checked={form.type ==="credit" ? true : false} onChange={e => handleChange(e)} /> 
                    <label htmlFor='credit'>Credit</label>
                    <input name='type' className='m-2' id="debit" type='radio' value={"debit"} checked={form.type ==="debit" ? true : false} onChange={e => handleChange(e)} /> 
                    <label htmlFor='debit'>Debit</label>
                    
                </div>
                <button type='submit' className='ui button'>Submit</button>
            </form>
        </div>         
        </div>
        <h3>Balance : {balance}</h3>
        <PassBook entries={entries}/>
      </div>
    </div>
  )
}

export default MainContainer;