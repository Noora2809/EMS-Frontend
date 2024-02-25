
import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import { MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function View() {

  const base_url='http://localhost:8000'

  //get an id from the url
  const {id}=useParams()
  console.log(id);//1

  const [employeeData,setEmployeeData]= useState({})

  //api fetching - function 
  const fetchAnEmployee=async(id)=>{
      const result = await axios.get(`${base_url}/get-an-employee/${id}`)
      console.log(result.data.employees);//object
      setEmployeeData(result.data.employees)
  }

  console.log(employeeData);//object with employee details

  useEffect(()=>{
    fetchAnEmployee(id)
  },[])


  return (
    <div>
      <h3 className="text-center m-4">View Employee Details</h3>
      <div className="row container mt-1 p-5">   
        <div className="col-8 ">
          {/* card */}
          <MDBCard className="shadow">
            <MDBCardBody>
              <MDBCardTitle className="text-center m-2 ">
                Employee Card
              </MDBCardTitle>
              <MDBCardText>
               {
                 <MDBListGroup style={{ minWidth: "22rem" }} light>
                 <MDBListGroupItem
                  
                   className="px-3"
                 >
      Employee Id : {employeeData.id}
                 </MDBListGroupItem>
                 <MDBListGroupItem  className="px-3">
      Full Name :  {employeeData.name}
                 </MDBListGroupItem>
                 <MDBListGroupItem  className="px-3">
      Age :  {employeeData.age}
                 </MDBListGroupItem>
                 <MDBListGroupItem  className="px-3">
      Designation :  {employeeData.designation}
                 </MDBListGroupItem>
                 <MDBListGroupItem  className="px-3">
        Salary :  {employeeData.salary}
                 </MDBListGroupItem>
               </MDBListGroup>
               }
              </MDBCardText>
          
            </MDBCardBody>
          </MDBCard>
        </div>
        <div className="col-4">{/* image/ user icon */}
        <img width={'500px'} src="https://i.pinimg.com/originals/6c/67/8c/6c678c23d360432d5dad8c4aae4d48ca.gif" alt="" />
        </div>
      </div>

      <div  className="text-center">
        <Link to={'/'}>
        <MDBBtn className="mb-3">Back to Home</MDBBtn>
        </Link>
      </div>
    </div>
  );
}

export default View;
