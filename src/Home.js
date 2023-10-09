import React, { useEffect, useState } from 'react';
import { RegisterstaionForm } from './RegisterstaionForm';
import { UserDataTable } from './UserDataTable';

const Home = () => {


  // (READ) - Getting records from locastorage 


  // To display localstorgae Data in the table

  // useEffect(() => {
  //   if (localData) {
  //     setRecords(localData)
  //   } else {
  //     setRecords([])
  //   }
  //   // eslint-disable-next-line 
  // }, [])

// (DELETE) - Delete the selected entery



  return (
    <div>
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Vertically centered hero sign-up form</h1>
            <p className="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
          </div>
          <RegisterstaionForm/>
          <UserDataTable/>
        </div>
      </div>
    </div>
  )
}

export default Home