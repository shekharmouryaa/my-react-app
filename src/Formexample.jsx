import React, { useState } from 'react';

function FormExample() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: '',
    isMarried: false,
    gender: 'male',
    comments: '',
    qualification:""
  });

  const handleInputChange = (e) => {

      
      
      const { name, value, type, checked } = e.target;  // Destructring
      
      const newValue = type === 'checkbox' ? checked : value;
      
      setFormData((prevData) => ({...prevData,[name]: newValue}));
      
      // Another Way
      // setFormData({...formData,[name]: newValue});
      // setFormData({...formData, [e.target.name] : e.target.value})
      
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div style={{width: "300px", marginLeft:"25px"}}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date of Birth:</label>
          <input
            type="date"
            className="form-control"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="isMarried"
            checked={formData.isMarried}
            onChange={handleInputChange}
          />
          <label className="form-check-label">I am Married</label>
        </div>
        <div className="mb-3">
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
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Comments:</label>
          <textarea
            className="form-control"
            name="comments"
            value={formData.comments}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormExample;
