import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Table } from "react-bootstrap";

function Read() {
  const [apiData, setApiData] = useState([]);

  function getdata() {
    axios.get("http://localhost:3001/api/router/").then((responce) => {
      setApiData(responce.data);
    });
  }

  const handleDelete = (id)=>{
    axios.delete(`http://localhost:3001/api/router/${id}`)
    .then(()=>{
        getdata();
    })
  }

  const setDataToStorage= (id,name,email,password,city,phone)=>{
    localStorage.setItem('id',id);
    localStorage.setItem('name',name);
    localStorage.setItem('email',email);
    localStorage.setItem('password',password);
    localStorage.setItem('city',city);
    localStorage.setItem('phone',phone);
  }

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="my-3">
      <Link to="/insert">
        <Button className="btn btn-danger mb-3 border-0">Insert new Item</Button>
      </Link>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr className="text-center">
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>City</th>
            <th>Number</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((item, id) => {
            return (
              <tr key={id} className="text-center">
                <td>{id+1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>{item.city}</td>
                <td>{item.phone}</td>
                <td><Link to='/update'><Button onClick={()=>{setDataToStorage(item._id,item.name,item.email,item.password,item.city,item.phone)}}>Edit</Button></Link></td>
                <td><Button onClick={()=>{if(window.confirm("Are you sure")){handleDelete(item._id)}}}>Delete</Button></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Read;
