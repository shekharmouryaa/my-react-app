import React from 'react';


export const RegisterstaionForm = ({submitForm,form,handleChange,isEdit,updateForm}) => {

    return (

        <div className="col-md-10 mx-auto col-lg-5">
            <form onSubmit={(e) =>isEdit ? updateForm(e) : submitForm(e)} className="p-4 p-md-5 border rounded-3 bg-body-tertiary" autoComplete='off'>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Name"
                        name={"name"} value={form.name} onChange={(e) => handleChange(e)} />
                    <label htmlFor="floatingInput">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                        name={"email"} value={form.email} onChange={(e) => handleChange(e)} />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="number" className="form-control" id="floatingPassword" placeholder="Password"
                        name={"phone"} value={form.phone} onChange={(e) => handleChange(e)} />
                    <label htmlFor="floatingphone">Phone</label>
                </div>
              
                <button className="w-100 btn btn-lg btn-primary" type="submit">{isEdit?"Update":"Submit"}</button>
                <hr className="my-4" />
                <small className="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
            </form>
        </div>
    )
}
