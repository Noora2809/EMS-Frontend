import React, { useState } from "react";
import { MDBInput } from "mdb-react-ui-kit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Add() {
  const [id, setId] = useState(""); //to hold input field data
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [designation, setDesignation] = useState("");
  const [salary, setSalary] = useState("");

  const base_url = "http://localhost:8000/add-employee";

  const location = useNavigate();

  const addEmployee = (e) => {
    e.preventDefault();
    console.log(id, name, age, designation, salary);

    //APi call for adding employee details
    const body = {
      id,
      name,
      age,
      designation,
      salary,
    };
    const result = axios
      .post(base_url, body)
      .then((response) => {
        console.log(response);
        alert(response.data.message);
        location("/");
      })
      .catch((error) => {
        alert("Please enter a unique employee id");
      });
  };

  return (
    <div>
      <div className="container text-center">
        <h1 className="mt-3 text-primary text-decoration-underline">
          Add Employee Details
        </h1>
        <form className="p-5 m-5 border shadow rounded">
          <MDBInput
            label="Id"
            id="formControlLg"
            onChange={(e) => setId(e.target.value)}
            type="text"
            size="lg"
          />
          <br />
          <MDBInput
            label="Name"
            id="formControlLg"
            onChange={(e) => setName(e.target.value)}
            type="text"
            size="lg"
          />
          <br />
          <MDBInput
            label="Age"
            id="formControlLg"
            onChange={(e) => setAge(e.target.value)}
            type="text"
            size="lg"
          />
          <br />
          <MDBInput
            label="Designation"
            id="formControlLg"
            onChange={(e) => setDesignation(e.target.value)}
            type="text"
            size="lg"
          />
          <br />
          <MDBInput
            label="Salary"
            id="formControlLg"
            onChange={(e) => setSalary(e.target.value)}
            type="text"
            size="lg"
          />
          <br />

          <div>
            <button
              className="btn btn-primary p-3 m-4"
              onClick={(e) => addEmployee(e)}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Add;
