import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllData = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3333/student');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  console.log(data)
  return (
    <div className="all_data">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index}>
              <td> {item.id} </td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.dob}</td>
              <td>{item.gender}</td>
              <td>{item.created_at}</td>
              <td>{item.updated_at}</td>
              <td>
                <button>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllData;
