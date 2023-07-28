import React, {useState} from 'react';

const Banner = () => {

  const [clicked, setClicked] = useState(false)
  const [show, setShow] = useState(false)

  const defaultForm = {
    full_name: '',
    email:'',
    password:''
  }

  const [form, setForm] = useState(defaultForm)
  const [records, setRecords] = useState([])

  const handleChange = (e) =>{
    setForm({...form, [e.target.name]: e.target.value})
  }

  const submitForm = (e) => {
    e.preventDefault();
    const enteries = [...records, form]
    setRecords(enteries)
    localStorage.setItem('userData', JSON.stringify(enteries))
    setForm(defaultForm)
  }
  console.log("records", records);
  
  return (
    <div>
      <button className='btn btn-warning mt-2' 
      onClick={()=>setClicked(!clicked)}> { clicked ? "Switch OFF" : "Switch ON"} </button>

        <button className='btn btn-info mt-2 ms-3' 
        onClick={()=>setShow(!show)}> { show ? "Hide Form" : "Show form"} </button>
      
      <div class="container col-xl-10 col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-lg-5 py-5">
      <div class="col-lg-7 text-center text-lg-start">
        <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">Vertically centered hero sign-up form</h1>
        <p class="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
      </div>
      { <div class="col-md-10 mx-auto col-lg-5">
        <form  onSubmit={(e)=> submitForm(e)} class="p-4 p-md-5 border rounded-3 bg-body-tertiary" autoComplete='off'>
        <div class="form-floating mb-3">

            <input type="text" class="form-control" id="floatingInput" placeholder="Full name" 
            name={"full_name"} value={form.full_name} onChange={(e)=>handleChange(e)} />

            <label for="floatingInput">Full Name</label>
          </div>
          <div class="form-floating mb-3">

            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
             name={"email"} value={form.email} onChange={(e)=>handleChange(e)}
            />


            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">

            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
             name={"password"} value={form.password} onChange={(e)=>handleChange(e)}/>

            <label for="floatingPassword">Password</label>
          </div>
        
          <button class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>

          
          <hr class="my-4"/>
          <small class="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
        </form>
      </div> }

<div className='table-wrapper'>
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
    </tr>
  </thead>
  <tbody>
    { records.map((item, index)=>(
      <tr key={index}>
      <th scope="row">{index+1}</th>
      <td>{item.full_name}</td>
      <td>{item.email}</td>
      <td>{item.password}</td>
    </tr>
    ))

    }
   
  </tbody>
</table>

</div>


    </div>
  </div>
    </div>
  )
}

export default Banner