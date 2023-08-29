import React, { useState } from 'react';

function FormExample() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: '',
    isMarried: false,
    gender: '',
    comments: '',
    qualification:""
  });

  const [isSubmitted , setIsSubmitted] = useState(false)
  // const [hobbiesItems , sethobbiesItems] = useState([{hobby:""}])

  

  const handleInputChange = (e) => {
      const { name, value, type, checked } = e.target;  // Destructring
      const newValue = type === 'checkbox' ? checked : value;
      setFormData((prevData) => ({...prevData,[name]: newValue}));
      
  };

  const handleSubmit = (event) => {
    setIsSubmitted(true)
    event.preventDefault();
    const { name, email, dob, isMarried } = formData;;
    if(name && email && dob && isMarried){
      console.log(formData);
    }else{
      console.log("Please fill mandantory fields");
    }
  };

  
  // { hobbiesItems.map(item =>
  //   <input
  //   className="form-control"
  //   name="comments"
  //   value={formData.hobbies}
  //   onChange={handleInputChange}
  // />
  // )}
  // <button onClick={()=>AddField()}> Add +</button>
  // const AddField =() =>{
  //   let hobbies = hobbiesItems.concat({hobby:""})
  //   sethobbiesItems(hobbies)
  // }

  return (
    <div style={{width: "300px", marginLeft:"25px"}}>
      <form onSubmit={handleSubmit}>
        <div className="m-3 border p-1">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        {isSubmitted && !formData.name  ?  <p className='mt-2 text-danger'>{"Name is required"}</p> : null}
        </div>
        <div className="m-3 border p-1">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
       {isSubmitted && !formData.email ? <p className='mt-2 text-danger'>{"Email is required"}</p> : null}
        </div>
        <div className="m-3 border p-1">
          <label className="form-label">Date of Birth:</label>
          <input
            type="date"
            className="form-control"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
          />
            {isSubmitted && !formData.dob ? <p className='mt-2 text-danger'>{"Date of Birth is required"}</p> : null}
        </div>
        
        <div className="m-3 border p-1 ">
          <div className='form-check'>
          <input
            type="checkbox"
            className="form-check-input"
            name="isMarried"
            checked={formData.isMarried}
            onChange={handleInputChange}
            />
          <label className="form-check-label">I am Married</label>
          {isSubmitted && !formData.isMarried ? <p className='mt-2 text-danger'>{"Maritial Status is required"}</p> : null}
            </div>
        </div>
        <div className="m-3 border p-1">
          <label className="form-label">Gender:</label>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleInputChange}
            />
            <label className="form-check-label">Male</label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleInputChange}
            />
            <label className="form-check-label">Female</label>
          {isSubmitted && !formData.gender ? <p className='mt-2 text-danger'>{"Gender is required"}</p> : null}
          </div>
        </div>
        <div className="m-3 border p-1">
          <label className="form-label">Comments:</label>
          <textarea
            className="form-control"
            name="comments"
            value={formData.comments}
            onChange={handleInputChange}
          />
        </div>
        <div className="m-3 border p-3">
          <label className="form-label">Qualification:</label>
          <select className='form-control'
            name ="qualification"
            value={formData.qualification}
            onChange={handleInputChange}>
            <option value="">Select Qualification</option>
            <option value="Post-gradudate">Post-gradudate</option>
            <option value="gradudate">Gradudate</option>
            <option value="Under gradudate">Under gradudate</option>
            <option value="Diploma">Diploma</option>
          </select>
        </div>

        <div className="m-3 border p-1">
          <label className="form-label">Hobbies:</label>
          <input
            className="form-control"
            name="comments"
            value={formData.hobbies}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormExample;
