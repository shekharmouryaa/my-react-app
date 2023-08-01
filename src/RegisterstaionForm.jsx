import React from 'react'

export const RegisterstaionForm = ({ edit, updateForm,submitForm, form, handleChange }) => {
    return (

        <div class="col-md-12 ">
            <form onSubmit={(e) => edit ? updateForm(e) : submitForm(e)} class="p-4 p-md-5 border rounded-3 bg-body-tertiary" autoComplete='off'>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Name"
                        name={"name"} value={form.name} onChange={(e) => handleChange(e)} />
                    <label for="floatingInput">Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
                        name={"email"} value={form.email} onChange={(e) => handleChange(e)} />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                        name={"password"} value={form.password} onChange={(e) => handleChange(e)} />
                    <label for="floatingPassword">Password</label>
                </div>
               { edit ? <button class="w-100 btn btn-lg btn-primary mt-3" type="submit">Update</button> :
                <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
                }
                <hr class="my-4" />
                <small class="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
            </form>
        </div>
    )
}
