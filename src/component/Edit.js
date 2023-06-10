import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function Edit() {

   const [ id, setId ] = useState(0);
   const [ name, setName ] = useState('');
   const [ age, setAge ] = useState('');
   const [ email, setEmail ] = useState('');
   const navigate = useNavigate();

   useEffect(() => {
    setId(localStorage.getItem('id'));
    setName(localStorage.getItem('name'));
    setAge(localStorage.getItem('age'));
    setEmail(localStorage.getItem('email'));
   }, [])

   const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://64840b4bee799e3216263cb9.mockapi.io/crud/${id}`, {
            e_name:name,
            e_age:age,
            e_email:email,
        }).then(() => {
            navigate('/')
        }).catch((err) => {
            console.log(err)
        })
   }

  return (
    <>
    <div className="row">
      <div className="col-md-4">
        <div className="mb-2 mt-2">
          <Link to="/">
            <button className="btn btn-primary">Read Data</button>
          </Link>
        </div>
        <div className="bg-primary p-4 text-center">
          <h1>Update Data</h1>
        </div>
        <form onSubmit={handleUpdate}>
          <div className="form-group">
            <label>Enter Name: </label>
            <input
              type="text"
              placeholder="Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Enter Age: </label>
            <input
              type="number"
              placeholder="Age"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Enter Email: </label>
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <div className="d-grid">
            <input type="submit" value="Update" className="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
  </>
  )
}

export default Edit
