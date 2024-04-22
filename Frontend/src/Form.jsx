import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [data, setData] = useState({
    first_name: '',
    last_name: '',
    gender: '',
    dob: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        'http://localhost:3333/student',
        data
      );
      console.log(data,'Data sent successfully');
    } catch (error) {
      console.error('Error sending data:', error);
    }
    setData({
      first_name: '',
      last_name: '',
      gender: '',
      dob: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="form-container">
      <h2>Form</h2>
      <form id="simpleForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="first_name">First Name:</label>
          <input type="text" id="first_name" name="first_name" value={data.first_name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name:</label>
          <input type="text" id="last_name" name="last_name" value={data.last_name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" id="dob" name="dob" value={data.dob} onChange={handleChange} required placeholder="DD/MM/YYYY" />
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender" value={data.gender} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;
